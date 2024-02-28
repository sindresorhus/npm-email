import test from 'ava';
import {HTTPError} from 'ky';
import npmEmail from './index.js';

test.serial('invalid input', async t => {
	await t.throwsAsync(npmEmail(1), {message: 'Username required'});
});

test.serial('valid username', async t => {
	t.is(await npmEmail('sindresorhus'), 'sindresorhus@gmail.com');
	t.is(await npmEmail('vdemedes'), 'vadimdemedes@hey.com');
});

test.serial('non-existent user', async t => {
	t.is(await npmEmail('nnnope'), undefined);
});

test.serial('handles 404', async t => {
	globalThis.fetch = async () => {
		throw new HTTPError(
			new Response('', {status: 404, statusText: 'Not Found'}),
		);
	};

	const {default: npmEmailMocked} = await import('./index.js');

	await t.throwsAsync(
		npmEmailMocked('nnnope'),
		{message: 'User `nnnope` could not be found', code: 'ERR_NO_NPM_USER'},
	);
});
