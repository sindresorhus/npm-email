'use strict';
var test = require('ava');
var npmEmail = require('./');

test(function (t) {
	t.plan(1);

	npmEmail('sindresorhus', function (err, email) {
		t.assert(!err, err);
		t.assert(email === 'sindresorhus@gmail.com');
	});
});
