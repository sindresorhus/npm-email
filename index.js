'use strict';
const {URL} = require('url');
const got = require('got');
const getRegistryUrl = require('registry-url');

const npmEmail = async username => {
	if (typeof username !== 'string') {
		throw new TypeError('Username required');
	}

	let registryUrl = getRegistryUrl();

	// `npmjs.com` no longer supports the endpoint we need, so we use a mirror.
	if (registryUrl.trim().replace(/\/$/, '') === 'https://registry.npmjs.org') {
		registryUrl = 'https://r.cnpmjs.org/';
	}

	const url = new URL(`${registryUrl}-/user/org.couchdb.user:${username}`);

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
// TODO: Remove this for the next major release
module.exports.default = npmEmail;
