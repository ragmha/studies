/*
Repeat a string repeat a string
=====================================================================

- Repeat a given string (first argument) num times (second argument).

- Return an empty string if num is not a positive number.
*/

const repeatStringNumTimes = (str, num) => num > 0 ? str.repeat(num) : "";

// Test
repeatStringNumTimes("*", 3) // => "***".
repeatStringNumTimes("abc", 3) // => "abcabcabc".
repeatStringNumTimes("abc", 4) // => "abcabcabcabc".
