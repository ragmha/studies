// Modify Values in an Array with Map
// Array.prototype.map()

// Basics
const itemsA = [1, 2, 3, 4, 5];
const mappedA = itemsA.map(item => {});

mappedA; // => [ undefined, undefined, undefined, undefined, undefined ]

// Another Example

// Basics-1 (1-1 Mapping)
const itemsB = ['1', '2', '3', '4', '5'];
const mappedB = itemsB.map(item => Number(item));

mappedB; // => [ 1, 2, 3, 4, 5 ]

// Basics 2
const itemsC = [' Shane', 'Sally '];
const mappedC = itemsC.map(item => item.trim());

mappedC; // => [ 'Shane', 'Sally' ]

// Basics 3
const names = ['Shane', 'Sally'];
const mappedD = names.map(name => ({ firstName: name }));

mappedD; // => [ { firstName: 'Shane' }, { firstName: 'Sally' } ]

const really = mappedD.forEach(person => console.log(person.firstName));

really; /* =>
    Shane
    Sally
*/

// A good Example
const itemsD = [
  {
    firstName: 'Raghib',
    lastName: 'Hasan',
  },
  {
    firstName: 'Midhat',
    lastName: 'Hasan',
  },
];

const mappedE = itemsD.map(x => ({
  firstName: x.firstName,
  lastName: x.lastName,
  fullName: x.firstName + ' ' + x.lastName,
}));

const fullName = mappedE.forEach(person => console.log(person.fullName));

fullName; /* => 
    Raghib Hasan
    Midhat Hasan
*/

// Another Example

const itemsE = [
  { active: true, firstname: 'Shane', lastname: 'Osbourne' },
  { active: true, firstname: 'Sally', lastname: 'Osbourne' },
  { active: false, firstname: 'Ben', lastname: 'Barker' },
];

const mappedF = itemsE
  .filter(item => item.active)
  .map(item => item.firstname + ' ' + item.lastname);

function createHTMLList(itemsE) {
  const listElements = itemsE.map(item => `  <li>${item}</li>`).join('\n');
  return `<ul>\n${listElements}\n</ul>`;
}

const result = createHTMLList(mappedF);

result; /*
    <ul>
    <li>Shane Osbourne</li>
    <li>Sally Osbourne</li>
    </ul>
*/
