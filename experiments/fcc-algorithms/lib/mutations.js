/*
 Mutations
 =====================================================================
- Return true if the string in the first element of the array contains all of the
letters of the string in the second element of the array.

- For example, ["hello", "Hello"], should return true because all of the letters
in the second string are present in the first, ignoring case.

- The arguments ["hello", "hey"] should return false because the string "hello"
does not contain a "y".

- Lastly, ["Alien", "line"], should return true because all of the letters in
"line" are present in "Alien".

- Remember to use Read-Search-Ask if you get stuck. Write your own code.

- Here are some helpful links:

 * String.prototype.indexOf()

*/

const mutation = arr =>
	arr[1]
		.toLowerCase()
		.split('')
		.every(letter => arr[0].toLowerCase().indexOf(letter) != -1);

// TEST
mutation(['hello', 'hey']); // => false.
mutation(['hello', 'Hello']); // => true.
console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])); // => true.
mutation(['Mary', 'Army']); // => true.
mutation(['Mary', 'Aarmy']); // => true.
mutation(['Alien', 'line']); // => true.
mutation(['floor', 'for']); // => true.
mutation(['hello', 'neo']); // => false.
mutation(['voodoo', 'no']); // => false.
