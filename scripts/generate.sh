#!/usr/bin/env bash
# Regenerates src/generated/ from the local, committed spec (spec/rebrickable-openapi.json).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# openapi-generator runs on the JVM. Prefer a JAVA_HOME that actually has a
# JVM (Homebrew OpenJDK is installed but not always linked onto the PATH).
if [[ -z "${JAVA_HOME:-}" ]]; then
  for candidate in \
    /opt/homebrew/opt/openjdk/libexec/openjdk.jdk/Contents/Home \
    /usr/local/opt/openjdk/libexec/openjdk.jdk/Contents/Home \
    /opt/homebrew/opt/openjdk@*/libexec/openjdk.jdk/Contents/Home; do
    if [[ -x "$candidate/bin/java" ]]; then
      export JAVA_HOME="$candidate"
      break
    fi
  done
fi

if ! command -v java >/dev/null 2>&1 && [[ -z "${JAVA_HOME:-}" ]]; then
  echo "No Java runtime found. Install OpenJDK, e.g.: brew install openjdk" >&2
  exit 1
fi

# The generator version is pinned in openapitools.json.
# Generator options are listed here so an update is just `npm run update`.
npx --yes @openapitools/openapi-generator-cli generate \
  --generator-name typescript-fetch \
  --input-spec spec/rebrickable-openapi.json \
  --output src/generated \
  --additional-properties=useSingleRequestParameter=true,supportsES6=true,withoutPrefixEnums=true \
  --skip-validate-spec

echo
echo "Generated client in src/generated/ (from spec/rebrickable-openapi.json)"