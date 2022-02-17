# npm-email

> Get the email of an npm user

## Install

```sh
npm install npm-email
```

## Usage

```js
import npmEmail from 'npm-email';

console.log(await npmEmail('sindresorhus'));
//=> 'sindresorhus@gmail.com'
```

## API

### npmEmail(username)

Returns a promise for the user's email address, or `undefined` if the user does not exist or the email could not be found.

#### username

Type: `string`

The npm username to look up.

## Related

- [npm-email-cli](https://github.com/sindresorhus/npm-email-cli) - CLI for this module
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user
