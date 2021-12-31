/*
Search and Replace
=====================================================================

- Perform a search and replace on the sentence using the arguments provided and
return the new sentence.

- First argument is the sentence to perform the search and replace on.

- Second argument is the word that you will be replacing (before).

- Third argument is what you will be replacing the second argument with (after).

- NOTE: Preserve the case of the original word when you are replacing it. For
example if you mean to replace the word "Book" with the word "dog", it should be
replaced as "Dog"

- Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write
your own code.

- Here are some helpful links:

  * Array.prototype.splice()
  * String.prototype.replace()
  * Array.prototype.join()
*/

const myReplace = (str, before, after) => {
	let re = new RegExp(before, 'gi');
	if (/[A-Z]/.test(before[0])) {
		after = after.charAt(0).toUpperCase() + after.slice(1);
	}
	let newStr = str.replace(re, after);
	return newStr;
};

// TEST
myReplace('Let us go to the store', 'store', 'mall'); // => "Let us go to the mall".
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'); // => "He is Sitting on the couch".
myReplace('This has a spellngi error', 'spellngi', 'spelling'); // => "This has a spelling error".
myReplace('His name is Tom', 'Tom', 'john'); // => "His name is John".
myReplace('Let us get back to more Coding', 'Coding', 'algorithms'); // => "Let us get back to more Algorithms".
