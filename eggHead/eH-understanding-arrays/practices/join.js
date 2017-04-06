// Combine Values of an Array into a String with Join
// Array.prototype.join()

// Basics
var name = [ 'Raghib', 'Meow' ];

// glue or a separator ' ' or else it will be comma seperator default
console.log(name.join(' '));

// Practical use case
var help = [ 'Usage', '   foo-app<input>' ];

if (process.argv[2] === 'help') {
  console.log(help.join('\n'));
}

// Another example
var names = 'raghib hasan';

var x = names
  .split(' ')
  .map(x => x.charAt(0).toUpperCase() + x.slice(1))
  .join(' ');

// creates string
console.log(x);
