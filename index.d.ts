declare const npmEmail: {
	/**
	Get the email of an npm user.

	@param username - npm username to look up.
	@returns The user's email address.

	@example
	```
	import npmEmail = require('npm-email');

	(async () => {
		console.log(await npmEmail('sindresorhus'));
		//=> 'sindresorhus@gmail.com'
	})();
	```
	*/
	(username: string): Promise<string>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function npmEmail(username: string): Promise<string>;
	// export = npmEmail;
	default: typeof npmEmail;
};

export = npmEmail;
