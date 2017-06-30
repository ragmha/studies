/*
 Caesars Cipher
 =====================================================================

 - One of the simplest and most widely known ciphers is a Caesar cipher, also
 known as a shift cipher. In a shift cipher the meanings of the letters are
 shifted by some set amount.

 - A common modern use is the ROT13 cipher, where the values of the letters are
 shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

 - Write a function which takes a ROT13 encoded string as input and returns a
 decoded string.

 - All letters will be uppercase. Do not transform any non-alphabetic character
 (i.e. spaces, punctuation), but do pass them on.

 - Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write
your own code.

 - Here are some helpful links:

 * String.prototype.charCodeAt()

 * String.fromCharCode()

*/

const rot13 = str =>
	str.replace(/[A-Z]/g, L =>
		String.fromCharCode(65 + (L.charCodeAt(0) - 65 + 13) % 26)
	);

// TEST
rot13('SERR PBQR PNZC'); //=> "FREE CODE CAMP"
rot13('SERR CVMMN!'); //=> "FREE PIZZA!"
rot13('SERR YBIR?'); //=> "FREE LOVE?"
rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'); //=> "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
