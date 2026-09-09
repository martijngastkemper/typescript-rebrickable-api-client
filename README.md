# Rebrickable API client (TypeScript)

A typed TypeScript client for the [Rebrickable LEGO API v3](https://rebrickable.com/api/v3/docs/),
generated with [openapi-generator](https://openapi-generator.tech) from the official
[OpenAPI spec](https://rebrickable.com/api/v3/swagger/?format=openapi).

## Usage

```ts
import { RebrickableClient } from 'rebrickable-api-client';

const client = new RebrickableClient({ apiKey: 'YOUR_API_KEY' });

// Public catalog data
const sets = await client.listSets({ themeId: '158', pageSize: 20 });
console.log(sets.results[0].name);

// Authenticated user data (get a token, then reuse it)
const { token } = await client.getUserToken('username', 'password');
const user = new RebrickableClient({ apiKey: 'YOUR_API_KEY', userToken: token });
const owned = await user.listUserSets();
```

Every method is typed: request parameters come from the OpenAPI spec, response
payloads come from the hand-maintained models in [`src/models.ts`](src/models.ts).

For anything not wrapped, the underlying generated API classes are exposed on the
client (`client.lego`, `client.users`, `client.swagger`) and re-exported from the
package root — including the raw `*Raw()` methods and `runtime` machinery.

## Project layout

| Path | Purpose |
| --- | --- |
| `spec/rebrickable-openapi.json` | The downloaded spec, committed for diffable updates |
| `src/generated/` | openapi-generator output (`typescript-fetch`). Do **not** edit by hand |
| `src/models.ts` | Typed response models (hand-maintained, see below) |
| `src/index.ts` | `RebrickableClient` — auth header + typed wrappers + re-exports |
| `scripts/update.sh` | Download latest spec + regenerate the client |
| `scripts/generate.sh` | Regenerate from the local spec |
| `openapitools.json` | Pins the openapi-generator version |

## Updating the client

```bash
npm run update
```

This script:

1. Downloads the latest spec from Rebrickable into `spec/rebrickable-openapi.json`
   (refuse to proceed if upstream returns something that isn't JSON).
2. Regenerates `src/generated/` with the pinned generator version.
3. Reminds you to review `git diff` of the generated code and models.

Two things are involved in an update:

- **Generated code updates automatically** — endpoints, request parameters, and
  the intended request shapes always match the latest spec.
- **Response models don't.** Rebrickable's official OpenAPI spec ships no response
  schemas, so every endpoint is generated with a `void` response. `src/models.ts`
  documents the real response shapes and the client's typed wrappers in
  `src/index.ts` parse raw JSON into them. If an update adds a model field, add it
  to `src/models.ts`.

### Requirements for `npm run update`

- Node.js 18+ (for `npm install`).
- Java (the generator runs on the JVM). On macOS with Homebrew: `brew install openjdk`.
  The scripts prefer a Homebrew OpenJDK automatically when `JAVA_HOME` is unset;
  otherwise set `JAVA_HOME` yourself.
- The generator CLI jar (pinned in `openapitools.json`) is downloaded on first run.

### After an update

```bash
npm run typecheck   # catches wrapper/generated mismatches
npm run test        # smoke tests with a mocked fetch
```

### Version bumping the generator

`openapitools.json` pins the openapi-generator version (currently `7.25.0`). To
upgrade, bump it there — then the update script uses the new version.

## Development

```bash
npm install
npm run generate   # regenerate from the local spec (no network)
npm run build      # compile to dist/
npm run test       # build + smoke tests (mocked fetch, no network)
```

## Notes and limitations

- **Auth**: Rebrickable requires `Authorization: key <apiKey>` on every request;
  the client adds it automatically. Use the `headers` config option or per-call
  overrides if you ever need to replace it.
- **`/users/_token`** needs Rebrickable username + password (not the API key).
- **Response typing**: because upstream ships no schemas, models are maintained by
  hand and may drift from reality — treat them as the documented shape and
  `interface UserSet extends SetSummary` style extension points are in `src/models.ts`.
