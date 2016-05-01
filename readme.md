# npm-email [![Build Status](https://travis-ci.org/sindresorhus/npm-email.svg?branch=master)](https://travis-ci.org/sindresorhus/npm-email)

> Get the email of an npm user


## Install

```
$ npm install --save npm-email
```


## Usage

```js
const npmEmail = require('npm-email');

npmEmail('sindresorhus').then(email => {
	console.log(email);
	//=> 'sindresorhus@gmail.com'
});
```


## API

### npmEmail(username)

Returns a promise for the user's email address.

#### username

Type: `string`

Npm username to look up.


## CLI

```
$ npm install --global npm-email
```

```
$ npm-email --help

  Usage
    $ npm-email <username>

  Example
    $ npm-email sindresorhus
    sindresorhus@gmail.com
```


## Related

- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
