import test from 'ava';
import npmEmail from '.';

test('invalid input', async t => {
	await t.throwsAsync(npmEmail(1), 'Username required');
});

test('unknown username', async t => {
	const randomName = `asdasfgrgafadsgaf${Math.random().toString().slice(2)}`;
	await t.throwsAsync(npmEmail(randomName), `User ${randomName} doesn't exist`);
});

test('valid username', async t => {
	t.is(await npmEmail('sindresorhus'), 'sindresorhus@gmail.com');
});

test('valid username with special character', async t => {
	t.is(await npmEmail('lukeramsden\''), 'lukeramsden8@gmail.com');
});
