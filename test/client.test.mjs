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

test('throws on non-2xx responses', async () => {
  const { fetchApi } = mockFetch(404, JSON.stringify({ detail: 'Not found.' }));
  const client = new RebrickableClient({ apiKey: 'x', fetchApi });

  await assert.rejects(() => client.getSet('75159-1'), /Response returned an error code/);
});