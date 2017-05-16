install:
	npm install

start:
	npm run babel-node -- src/bin/brain-even.js

publish:
	rm -rf dist
	npm publish

build:
	npm run build

lint:
	npm run eslint -- src

# test:
# 	npm test
