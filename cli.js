#!/usr/bin/env node
'use strict';
var meow = require('meow');
var npmEmail = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ npm-email <username>',
		'',
		'Example',
		'  $ npm-email sindresorhus',
		'  sindresorhus@gmail.com'
	]
});

var username = cli.input[0];

if (!username) {
	console.error('Please supply a npm username');
	process.exit(1);
}

npmEmail(username, function (err, email) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(email);
});
