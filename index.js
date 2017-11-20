'use strict';
const {URL} = require('url');
const got = require('got');
const registryUrl = require('registry-url');

module.exports = username => {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	const urlStr = `${registryUrl()}-/user/org.couchdb.user:${username}`;
	const url = URL ? new URL(urlStr) : urlStr;

	return got(url, {json: true})
		.then(res => res.body.email)
		.catch(err => {
			if (err && err.statusCode === 404) {
				throw new Error(`User ${username} doesn't exist`);
			}

			throw err;
		});
};
