import test from 'ava';
import m from './';

test('invalid input', async t => {
	await t.throws(m(1), 'username required');
});

test('unknown username', async t => {
	const randomName = `asdasfgrgafadsgaf${Math.random().toString().slice(2)}`;
	await t.throws(m(randomName), `User ${randomName} doesn't exist`);
});

test('valid username', async t => {
	t.is(await m('sindresorhus'), 'sindresorhus@gmail.com');
});

// If URL class is present (NODE v7 and above), execute the las test
const {URL} = require('url');

if (URL) {
	test('valid username with special char', async t => {
		t.is(await m(`lukeramsden'`), 'lukeramsden8@gmail.com');
	});
}
