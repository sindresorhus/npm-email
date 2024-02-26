import ky from 'ky';

export default async function npmEmail(username) {
	if (typeof username !== 'string') {
		throw new TypeError('Username required');
	}

	const url = new URL(`https://registry.npmjs.com/-/v1/search?&text=maintainer:${encodeURIComponent(username)}`);

	try {
		const {objects: results} = await ky(url).json();

		results.sort((a, b) => b.package.date.localeCompare(a.package.date));

		for (const {package: package_} of results) {
			const users = [
				package_.author,
				package_.publisher,
				...package_.maintainers,
			];

			for (const user of users) {
				if (user?.username === username && typeof user?.email === 'string' && user?.email !== '') {
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
