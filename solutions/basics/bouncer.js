/*
 Falsy Bouncer
 =====================================================================

 - Remove all falsy values from an array.

 - Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

*/

const bouncer = arr => arr.filter(Boolean);

module.exports = bouncer;
