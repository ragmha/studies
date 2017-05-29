/*
 Falsy Bouncer
 =====================================================================

 - Remove all falsy values from an array.

 - Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

 - Remember to use Read-Search-Ask if you get stuck. Write your own code.

 - Here are some helpful links:

 * Boolean Objects
 * Array.prototype.filter()
*/

const bouncer = arr => arr.filter(a => Boolean(a));

// TEST
bouncer([7, 'ate', '', false, 9]); // => [7, "ate", 9].
bouncer(['a', 'b', 'c']); // => ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, '']); // => [].
bouncer([1, null, NaN, 2, undefined]); // => [1, 2].
