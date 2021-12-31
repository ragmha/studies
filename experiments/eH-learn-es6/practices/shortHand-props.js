// Shorthand Properties in ES6

let firstName = 'Raghib';
let lastName = 'Hasan';

let person = { firstName, lastName };

person; // => { firstName: 'Raghib', lastName: 'Hasan' }

let mascot = 'Moose';
let team = { person, mascot };

team; // => { person: { firstName: 'Raghib', lastName: 'Hasan' }, mascot: 'Moose' }
