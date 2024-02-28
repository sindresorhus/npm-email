import ky from 'ky';

export default async function npmEmail(username) {
	if (typeof username !== 'string') {
		throw new TypeError('Username required');
	}

	const url = new URL(`https://registry.npmjs.com/-/v1/search?&text=maintainer:${encodeURIComponent(username)}`);

	try {
		const {objects: results, total} = await ky(url).json();

		if (total === 0) {
			return undefined;
		}

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
		if (error?.response?.status === 404) {
			const notFoundError = new Error(`User \`${username}\` could not be found`, {cause: error});
			notFoundError.code = 'ERR_NO_NPM_USER';
			throw notFoundError;
		}

		throw error;
	}
}
