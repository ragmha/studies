/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string
(second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced
in ES2015. But for the purpose of this challenge, we would like you to use one
of the JavaScript substring methods instead.
*/

const confirmEnding = (str, target) => str.substr(-target.length) === target;

// Test
confirmEnding("Bastian", "n"); // => True
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); // => false
confirmEnding("Open sesame", "same"); // => True
