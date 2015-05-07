# npm-email [![Build Status](https://travis-ci.org/sindresorhus/npm-email.svg?branch=master)](https://travis-ci.org/sindresorhus/npm-email)

> Get the email of a npm user


## Install

```
$ npm install --save npm-email
```


## Usage

```js
var npmEmail = require('npm-email');

npmEmail('sindresorhus', function (err, email) {
	console.log(email);
	//=> 'sindresorhus@gmail.com'
});
```


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

- [`npm-keyword`](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [`package-json`](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
