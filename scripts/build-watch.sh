#!/bin/bash

set -euo pipefail

cleanup() {
    trap - EXIT INT TERM
    kill 0 >/dev/null 2>&1 || true
}

trap cleanup EXIT INT TERM

rm -rf ./dist

./node_modules/.bin/fedx-scripts babel src \
    --out-dir dist \
    --source-maps \
    --ignore '**/*.test.jsx,**/__mocks__,**/__snapshots__,**/setupTest.js' \
    --copy-files \
    --watch &

npx @tailwindcss/cli -i src/header.css -o dist/header.css --watch
