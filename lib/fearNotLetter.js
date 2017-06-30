/*
Missing letters
=====================================================================

- Find the missing letter in the passed letter range and return it.

- If all letters are present in the range, return undefined.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

  * String.prototype.charCodeAt()
  * String.fromCharCode()
*/

const fearNotLetter = str => {
	let compare = str.charCodeAt(0);
	let missing;

	str.split('').map((letter, index) => {
		if (str.charCodeAt(index) == compare) {
			++compare;
		} else {
			missing = String.fromCharCode(compare);
		}
	});

	return missing;
};

// TEST
fearNotLetter('abce'); //=> "d"
fearNotLetter('abcdefghjklmno'); //=> "i"
fearNotLetter('bcd'); //=> undefined
fearNotLetter('yz'); //=> undefined
