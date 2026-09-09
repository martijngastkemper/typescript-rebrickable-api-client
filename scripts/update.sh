#!/usr/bin/env bash
# Downloads the latest OpenAPI spec from Rebrickable and regenerates the client.
# This is the single command to run to keep the client up to date.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

SPEC_URL="${REBRICKABLE_SPEC_URL:-https://rebrickable.com/api/v3/swagger/?format=openapi}"
SPEC_FILE="spec/rebrickable-openapi.json"

mkdir -p spec

echo "Downloading spec from $SPEC_URL"
curl -fsSL "$SPEC_URL" -o "$SPEC_FILE"

# The upstream endpoint occasionally returns an HTML page instead of JSON;
# only continue if what we got is a parseable OpenAPI document.
if ! command -v jq >/dev/null 2>&1; then
  echo "jq is required to validate the spec. Install it, e.g.: brew install jq" >&2
  exit 1
fi

if ! jq -e '.paths' "$SPEC_FILE" > /dev/null 2>&1; then
  echo "Downloaded file is not an OpenAPI/Swagger document (missing 'paths'). Check $SPEC_URL" >&2
  exit 1
fi

version="$(jq -r '.swagger // .openapi // "?"' "$SPEC_FILE")"
count="$(jq '.paths | length' "$SPEC_FILE")"
echo "Spec OK: $version, $count paths"

bash scripts/generate.sh

echo
echo "Done. Review the diff with: git diff spec/ src/generated/"
echo "If response shapes changed, update src/models.ts and the typed methods in src/index.ts."