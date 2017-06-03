/*
Everything Be True
===============================================================================

- Check if the predicate (second argument) is truthy on all elements of a
collection (first argument).

- Remember, you can access object properties through either dot notation or []
 notation.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.
*/

const truthCheck = (collection, pre) =>
	collection.every(
		element => element.hasOwnProperty(pre) && Boolean(element[pre])
	);

// TEST
truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy', sex: 'male' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' }
	],
	'sex'
); // => true.
truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male' },
		{ user: 'Dipsy' },
		{ user: 'Laa-Laa', sex: 'female' },
		{ user: 'Po', sex: 'female' }
	],
	'sex'
); // => false.
truthCheck(
	[
		{ user: 'Tinky-Winky', sex: 'male', age: 0 },
		{ user: 'Dipsy', sex: 'male', age: 3 },
		{ user: 'Laa-Laa', sex: 'female', age: 5 },
		{ user: 'Po', sex: 'female', age: 4 }
	],
	'age'
); // => false.
truthCheck(
	[
		{ name: 'Pete', onBoat: true },
		{ name: 'Repeat', onBoat: true },
		{ name: 'FastFoward', onBoat: null }
	],
	'onBoat'
); // => false
truthCheck(
	[
		{ name: 'Pete', onBoat: true },
		{ name: 'Repeat', onBoat: true, alias: 'Repete' },
		{ name: 'FastFoward', onBoat: true }
	],
	'onBoat'
); // => true
truthCheck([{ single: 'yes' }], 'single'); // => true
truthCheck([{ single: '' }, { single: 'double' }], 'single'); // => false
truthCheck([{ single: 'double' }, { single: undefined }], 'single'); // => false
truthCheck([{ single: 'double' }, { single: NaN }], 'single'); // => false
