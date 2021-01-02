# npm-email

> Get the email of an npm user


## Install

```
$ npm install npm-email
```


## Usage

```js
const npmEmail = require('npm-email');

(async () => {
	console.log(await npmEmail('sindresorhus'));
	//=> 'sindresorhus@gmail.com'
})();
```


## API

### npmEmail(username)

Returns a promise for the user's email address.

#### username

Type: `string`

npm username to look up.


## Related

- [npm-email-cli](https://github.com/sindresorhus/npm-email-cli) - CLI for this module
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
