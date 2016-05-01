import test from 'ava';
import m from './';

test('invalid input', t => {
	t.throws(m(1), 'username required');
});

test('unknown username', t => {
	const randomName = `asdasfgrgafadsgaf${Math.random().toString().slice(2)}`;
	t.throws(m(randomName), 'User doesn\'t exist');
});

test('valid username', async t => {
	t.is(await m('sindresorhus'), 'sindresorhus@gmail.com');
});
