import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RebrickableClient } from '../dist/index.js';

function mockFetch(status = 200, body = null) {
  const calls = [];
  const fetchApi = async (url, init) => {
    calls.push({ url, init, body });
    return new Response(body, { status, headers: { 'content-type': 'application/json' } });
  };
  return { calls, fetchApi };
}

test('sends the API key as an Authorization header on every request', async () => {
  const { calls, fetchApi } = mockFetch(200, JSON.stringify({ count: 0, next: null, previous: null, results: [] }));
  const client = new RebrickableClient({ apiKey: 'secret', fetchApi });

  await client.listColors();

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://rebrickable.com/api/v3/lego/colors/');
  assert.equal(calls[0].init.headers.Authorization, 'key secret');
});

test('parses typed paginated responses', async () => {
  const colors = {
    count: 1,
    next: null,
    previous: null,
    results: [{ id: 5, name: 'Red', rgb: 'C91A09', is_trans: false }],
  };
  const { fetchApi } = mockFetch(200, JSON.stringify(colors));
  const client = new RebrickableClient({ apiKey: 'x', fetchApi });

  const result = await client.listColors({ pageSize: 1 });
  assert.deepEqual(result, colors);
});

test('uses custom basePath and falls back to the configured userToken', async () => {
  const { calls, fetchApi } = mockFetch(
    200,
    JSON.stringify({ username: 'bob', user_id: 1, avatar_url: null, timezone: 'UTC' }),
  );
  const client = new RebrickableClient({ apiKey: 'x', basePath: 'http://localhost:3000', userToken: 'tok123', fetchApi });

  const profile = await client.getProfile();

  assert.equal(profile.username, 'bob');
  assert.equal(calls[0].url, 'http://localhost:3000/api/v3/users/tok123/profile/');
});

test('attaches a user token later via setUserToken() and reuses the client', async () => {
  const { calls, fetchApi } = mockFetch(
    200,
    JSON.stringify({ username: 'bob', user_id: 1, avatar_url: null, timezone: 'UTC' }),
  );
  const client = new RebrickableClient({ apiKey: 'x', fetchApi });

  client.setUserToken('tok999');
  const profile = await client.getProfile();

  assert.equal(profile.username, 'bob');
  assert.equal(calls[0].url, 'https://rebrickable.com/api/v3/users/tok999/profile/');
});

test('getUserToken returns user_token and setUserToken wires it into user calls', async () => {
  const responses = new Map([
    ['/api/v3/users/_token/', { username: 'bob', user_token: 'tok123' }],
    ['/api/v3/users/tok123/profile/', { username: 'bob', user_id: 1, avatar_url: null, timezone: 'UTC' }],
  ]);
  const fetchApi = async (url, _init) => {
    const path = new URL(url).pathname;
    return new Response(JSON.stringify(responses.get(path) ?? {}), { status: 200, headers: { 'content-type': 'application/json' } });
  };

  const client = new RebrickableClient({ apiKey: 'x', fetchApi });
  const { user_token } = await client.getUserToken('bob', 'secret');
  assert.equal(user_token, 'tok123');

  client.setUserToken(user_token);
  const profile = await client.getProfile();
  assert.equal(profile.username, 'bob');
});

test('retries failed requests (5xx) and succeeds on retry', async () => {
  let callCount = 0;
  const fetchApi = async () => {
    callCount++;
    if (callCount === 1) {
      return new Response('Internal Server Error', { status: 500 });
    }
    return new Response(JSON.stringify({ results: [{ id: 1, name: 'Red' }] }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  };

  const client = new RebrickableClient({ apiKey: 'x', fetchApi, retry: { minTimeout: 1 } });
  const colors = await client.listColors();
  assert.equal(colors.results[0].name, 'Red');
  assert.equal(callCount, 2);
});

test('does not retry non-retryable errors (404)', async () => {
  let callCount = 0;
  const fetchApi = async () => {
    callCount++;
    return new Response('Not Found', { status: 404 });
  };

  const client = new RebrickableClient({ apiKey: 'x', fetchApi });
  await assert.rejects(client.listColors(), /HTTP 404/);
  assert.equal(callCount, 1);
});

test('throws on non-2xx responses', async () => {
  const { fetchApi } = mockFetch(404, JSON.stringify({ detail: 'Not found.' }));
  const client = new RebrickableClient({ apiKey: 'x', fetchApi });

  await assert.rejects(() => client.getSet('75159-1'), /HTTP 404:.*Not found\./);
});