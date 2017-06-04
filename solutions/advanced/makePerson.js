/*
Make a Person
================================================================================

- Fill in the object constructor with the following methods below:

- getFirstName()
- getLastName()
- getFullName()
- setFirstName(first)
- setLastName(last)
- setFullName(firstAndLast)
- Run the tests to see the expected output for each method.

- The methods that take an argument must accept only one argument and it has to
be a string.

- These methods must be the only available means of interacting with the object.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

  * Closures
  * Details of the Object Model
*/

var Person = function(firstAndLast) {
	let fullName;

	this.setFullName = full => {
		fullName = full.split(' ');
	};

	this.setFirstName = first => {
		fullName[0] = first;
	};

	this.setLastName = last => {
		fullName[1] = last;
	};

	this.setFullName(firstAndLast);

	this.getFirstName = () => fullName[0];

	this.getLastName = () => fullName[1];

	this.getFullName = () => fullName.join(' ');
};

var bob = new Person('Bob Ross');

// TEST
Object.keys(bob).length; // => 6.
bob instanceof Person; // => true.
bob.firstName; // => undefined.
bob.lastName; // => undefined.
bob.getFirstName(); // => "Bob".
bob.getLastName(); // => "Ross".
bob.getFullName(); // => "Bob Ross".
bob.getFullName(); // => "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName(); // => "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName(); // => "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName(); // => "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName(); // => "Curry" after bob.setFullName("Haskell Curry").
