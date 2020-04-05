#!/usr/bin/env sh

set -e

npm run build

cd dist

# если вы публикуете по адресу https://<USERNAME>.github.io
git push -f git@github.com:shwarz113/shwarz113.github.io.git master

cd -
