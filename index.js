'use strict';
const got = require('got');
const registryUrl = require('registry-url');
const { URL } = require('url');

module.exports = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const url = new URL(`${registryUrl()}-/user/org.couchdb.user:${username}`);

	return got(url, {json: true})
		.then(res => res.body.email)
		.catch(err => {
			if (err && err.statusCode === 404) {
				throw new Error(`User ${username} doesn't exist`);
			}

			throw err;
		});
};
