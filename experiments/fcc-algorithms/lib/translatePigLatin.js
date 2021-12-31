/*
Pig Latin
=====================================================================

- Translate the provided string to pig latin.

- Pig Latin takes the first consonant (or consonant cluster) of an English word,
 moves it to the end of the word and suffixes an "ay".

- If a word begins with a vowel you just add "way" to the end.

- Input strings are guaranteed to be English words in all lowercase.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
 Write your own code.

- Here are some helpful links:

  * Array.prototype.indexOf()
  * Array.prototype.push()
  * Array.prototype.join()
  * String.prototype.substr()
  * String.prototype.split()
*/

const isConsonant = char => !/[aeiou]/.test(char);

const translatePigLatin = str => {
	let strArr = [];
	let tmpChar;

	if (!isConsonant(str.charAt(0))) {
		return str + 'way';
	} else {
		strArr = str.split('');
	}

	while (isConsonant(strArr[0])) {
		tmpChar = strArr.shift();
		strArr.push(tmpChar);
	}

	return strArr.join('') + 'ay';
};

// TEST
translatePigLatin('california'); //=> "aliforniacay"
translatePigLatin('paragraphs'); //=> "aragraphspay"
translatePigLatin('glove'); //=> "oveglay"
translatePigLatin('algorithm'); //=> "algorithmway"
translatePigLatin('eight'); //=> "eightway"
