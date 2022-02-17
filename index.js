import got from 'got';

export default async function npmEmail(username) {
	if (typeof username !== 'string') {
		throw new TypeError('Username required');
	}

	const url = new URL(`https://api.npms.io/v2/search?q=maintainer:${encodeURIComponent(username)}`);

	try {
		const {results} = await got(url).json();

		for (const {package: package_} of results) {
			const users = [
				package_.author,
				package_.publisher,
				...package_.maintainers,
			];

			for (const user of users) {
				if (user?.username === username && user?.email && typeof user.email === 'string') {
					return user.email;
				}
			}
		}
	} catch (error) {
		if (error && error.statusCode === 404) {
			throw new Error(`User ${username} doesn't exist`);
		}

		throw error;
	}
}
