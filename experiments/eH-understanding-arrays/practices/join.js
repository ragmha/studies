// Combine Values of an Array into a String with Join
// Array.prototype.join()

// Basics
let name = ['Raghib', 'Meow'];

// glue or a separator ' ' or else it will be comma seperator default
name.join(' '); // => Raghib Meow

// Practical use case
let help = ['Usage', '   foo-app<input>'];

if (process.argv[2] === 'help') {
  console.log(help.join('\n'));
} /* => 
Usage
   foo-app<input>
*/

// Another example
let names = 'raghib hasan';

let x = names
  .split(' ')
  .map(x => x.charAt(0).toUpperCase() + x.slice(1))
  .join(' ');

// creates string
x; // => Raghib Hasan
