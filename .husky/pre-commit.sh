#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn type:check
yarn lint:cache