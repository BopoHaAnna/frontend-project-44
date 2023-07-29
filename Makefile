lint:
	npx eslint .
install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
brain-calc:
	node bin/brain-calc.js
brain-even:
	node bin/brain-even.js
