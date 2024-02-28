import test from 'ava';
import {HTTPError} from 'ky';
import npmEmail from './index.js';

test('invalid input', async t => {
	await t.throwsAsync(npmEmail(1), {message: 'Username required'});
});

test('valid username', async t => {
	t.is(await npmEmail('sindresorhus'), 'sindresorhus@gmail.com');
	t.is(await npmEmail('vdemedes'), 'vadimdemedes@hey.com');
});

test('non-existent user', async t => {
	t.is(await npmEmail('nnnope'), undefined);
});

test('handles 404', async t => {
	const {fetch} = globalThis;

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

	globalThis.fetch = fetch;
});
