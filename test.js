import test from 'ava';
import npmEmail from './index.js';

test('invalid input', async t => {
	await t.throwsAsync(npmEmail(1), {message: 'Username required'});
});

test('valid username', async t => {
	t.is(await npmEmail('sindresorhus'), 'sindresorhus@gmail.com');
	t.is(await npmEmail('vdemedes'), 'vadimdemedes@hey.com');
});
