#!/usr/bin/env node
'use strict';
const meow = require('meow');
const npmEmail = require('./');

const cli = meow(`
	Usage
	  $ npm-email <username>

	Example
	  $ npm-email sindresorhus
	  sindresorhus@gmail.com
`);

const username = cli.input[0];

if (!username) {
	console.error('Please supply an npm username');
	process.exit(1);
}

npmEmail(username).then(console.log);
