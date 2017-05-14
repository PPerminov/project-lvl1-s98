install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

publish:
	rm -rf dist
	npm publish

build:
	npm run build
