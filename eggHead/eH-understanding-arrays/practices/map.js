// Modify Values in an Array with Map
// Array.prototype.map()

// Basics
// const items = [1,2,3,4,5];
// const mapped = items.map(item => {});
//
// console.log(items);
// console.log(mapped);

// Another Example

// Basics-1 (1-1 Mapping)
// const items = ["1", "2", "3", "4", "5"];
// const mapped = items.map(item => Number(item));
//
// console.log(items);
// console.log(mapped);

// Basics 2
// const items = [" Shane", "Sally "];
// const mapped = items.map(item => item.trim());
//
// console.log(items);
// console.log(mapped);
//

// Basics 3
// const names = ["Shane", "Sally"];
// const mapped = names.map(name => ({firstName: name}));
//
// console.log(names);
// console.log(mapped);
//
// const really = mapped.forEach(person => console.log(person.firstName));
//
// console.log(really);
//

// A good Example
// const items = [
//   {
//     firstName: 'Raghib',
//     lastName: 'Hasan'
//   },
//   {
//     firstName: 'Midhat',
//     lastName: 'Hasan'
//   }
// ];
//
// const mapped = items.map( x => ({
//                 firstName : x.firstName,
//                 lastName : x.lastName,
//                 fullName : x.firstName + ' ' + x.lastName
//               })
// );
//
// const fullName = mapped.forEach(person => console.log(person.fullName));
//
//
// console.log(fullName);

// Another Example

const items = [
  { active: true, firstname: 'Shane', lastname: 'Osbourne' },
  { active: true, firstname: 'Sally', lastname: 'Osbourne' },
  { active: false, firstname: 'Ben', lastname: 'Barker' }
];

const mapped = items
  .filter(item => item.active)
  .map(item => item.firstname + ' ' + item.lastname);

function createHTMLList(items) {
  const listElements = items.map(item => `  <li>${item}</li>`).join('\n');
  return `<ul>\n${listElements}\n</ul>`;
}

const result = createHTMLList(mapped);

console.log(result);
