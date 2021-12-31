/*
Spinal Tap Case
=====================================================================

- Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

- Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

- Here are some helpful links:

  * RegExp
  * String.prototype.replace()
*/

const spinalCase = str => str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();

// TEST

spinalCase('This Is Spinal Tap'); // =>"this-is-spinal-tap"
spinalCase('thisIsSpinalTap'); // =>"this-is-spinal-tap"
spinalCase('The_Andy_Griffith_Show'); // =>"the-andy-griffith-show"
spinalCase('Teletubbies say Eh-oh'); // =>"teletubbies-say-eh-oh"
spinalCase('AllThe-small Things'); // =>"all-the-small-things"
