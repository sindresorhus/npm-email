'use strict';

const {URL} = require('url');
const got = require('got');
const registryUrl = require('registry-url');

const npmEmail = async username => {
	if (typeof username !== 'string') {
		throw new TypeError('Username required');
	}

	const url = new URL(`${registryUrl()}-/user/org.couchdb.user:${username}`);

	try {
		const {body} = await got(url, {json: true});
		return body.email;
	} catch (error) {
		if (error && error.statusCode === 404) {
			throw new Error(`User ${username} doesn't exist`);
		}

		throw error;
	}
};

module.exports = npmEmail;
module.exports.default = npmEmail;
