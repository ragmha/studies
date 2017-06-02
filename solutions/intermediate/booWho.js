/*
Boo who
=====================================================================

- Check if a value is classified as a boolean primitive. Return true or false.

- Boolean primitives are true and false.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.

- Here are some helpful links:

  * Boolean Objects
*/

const BooWho = bool => typeof bool === 'boolean';

// TEST
booWho(true); // => true.
booWho(false); // => true.
booWho([1, 2, 3]); // => false.
booWho([].slice); // => false.
booWho({ a: 1 }); // => false.
booWho(1); // => false.
booWho(NaN); // => false.
booWho('a'); // => false.
booWho('true'); // => false.
booWho('false'); // => false.
