'use strict';
var got = require('got');
var registryUrl = require('registry-url');

module.exports = function (username, cb) {
	if (typeof username !== 'string') {
		throw new Error('username required');
	}

	var url = registryUrl() + '-/user/org.couchdb.user:' + username;

	got(url, {json: true}, function (err, data) {
		if (err && err.code === 404) {
			cb(new Error('User doesn\'t exist'));
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		cb(null, data.email);
	});
};
