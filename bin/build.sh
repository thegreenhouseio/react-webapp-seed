#!/bin/sh

echo "executing build.sh..."

echo "show environment..."

echo "node version"
node --version

echo "npm version"
npm --version

echo "clear existing dependencies..."
rm -rf node_modules/ > /dev/null 2>&1

echo "clearing NPM caches..."
npm cache clean

echo "installing project dependencie"
echo "installing NPM packages"
npm install


echo "install typings"
./node_modules/.bin/typings install

echo "typescript version"
./node_modules/.bin/tsc --version

echo "typings version"
./node_modules/.bin/typings --version

echo "running the build..."
npm run ci