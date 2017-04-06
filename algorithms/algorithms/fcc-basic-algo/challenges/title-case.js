/*
Title Case a Sentence
=====================================================================

- Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.

- For the purpose of this exercise, you should also capitalize connecting words
like "the" and "of".

*/

const titleCase = str =>
            str.toLowerCase()
               .split(' ')
               .map(s => s.charAt(0).toUpperCase() + s.slice(1))
               .join(' ');

// OR

// const titleCase = str =>
//     str.toLowerCase()
//        .split(' ')
//        .map(str => str.replace(str[0], str[0].toUpperCase()))
//        .join(' ');


// Test

titleCase("I'm a little tea pot"); // => I'm A Little Tea Pot
