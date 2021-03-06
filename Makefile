install:
	npm install

start1:
	npm run babel-node -- src/bin/brain-games.js

start2:
	npm run babel-node -- src/bin/brain-even.js

start3:
	npm run babel-node -- src/bin/brain-calc.js

start4:
	npm run babel-node -- src/bin/brain-gcd.js

start5:
	npm run babel-node -- src/bin/brain-balance.js

start6:
	npm run babel-node -- src/bin/brain-progression.js

start7:
		npm run babel-node -- src/bin/brain-prime.js

publish:
	rm -rf dist
	npm publish

build:
	npm run build

lint:
	npm run eslint -- src

# test:
# 	npm test
