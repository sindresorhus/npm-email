/**
Get the email of an npm user.

@param username - The npm username to look up.
@returns The user's email address, or `undefined` if the user does not exist or the email could not be found.

@example
```
import npmEmail from  npm-email';

console.log(await npmEmail('sindresorhus'));
//=> 'sindresorhus@gmail.com'
```
*/
export default function npmEmail(username: string): Promise<string | undefined>;
