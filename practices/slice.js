// Create a Shallow Copy of an Array with Slice
// Array.prototype.slice();

// Example 1
let itemsA = [1, 2, 3, 4, 5];
let copyA = itemsA.slice(); /* =>  shallow copy,
 doesn't affect original array
 litterally copies the values in the array
 if it contains object references, then references are copied not object 
*/

copyA.push(6);

copyA[0] = 100;

itemsA; // => [ 1, 2, 3, 4, 5 ]
copyA; // =>  [100, 2, 3, 4, 5, 6];

// Example 2 (with objects)
let personA = { name: 'raghib' };

let itemsB = [1, personA];
let copyB = itemsB.slice();

// copies the reference of person not object (NOTE!!!)
copyB[1].name = 'meow';

// This effects both the original and the copy array :(
itemsB; // => [ 1, { name: 'meow' } ]
copyB; // => [ 1, { name: 'meow' } ]

// Example 3 : (Not only copy but it also takes a subsection)
let itemsC = [1, 2, 3, 4, 5];
let copy = itemsC.slice(0, 2); // start index: 0 , end index: 2
let copy2 = itemsC.slice(4); // start index: 4
let copy3 = itemsC.slice(-1); // start index: 4

copy; // => [ 1, 2 ]
copy2; // => [ 5 ]
copy3; // => [ 5 ]

// Practical (object)
let personB = { name: 'raghib-hasan' };

let filtersA = {
  deslugify: x => x.replace('-', ' '),
  uppercase: x => x.toUpperCase(),
};

let inputA = 'name | deslugify | uppercase';

// RAGHIB HASAN
let sectionsA = inputA.split('|').map(x => x.trim());

// [name, deslugify, uppercase]
let refA = personB[sectionsA[0]];

let outputA = sectionsA.slice(1).reduce((prev, next) => {
  if (filtersA[next]) {
    return filtersA[next].call(null, prev);
  }
  return prev;
}, refA);

outputA; // => RAGHIB HASAN

// Another example
let person = { name: 'RaGhiB-haSAN', age: 23 };

let filtersB = {
  lowercase: x => x.toLowerCase(),
  deslugify: x => x.replace('-', ' '),
  uppercase: x => x.toUpperCase(),
};

let inputB = 'name | lowercase | deslugify | uppercase';

let sections = inputB.split('|').map(x => x.trim());

let refB = person[sections[0]];

let output = sections.slice(1).reduce((prev, next) => {
  if (filtersB[next]) {
    console.log('prev-2', prev); // => RaGhiB - haSAN;
    console.log('next-2', next); // => lowercase;
    return filtersB[next].call(null, prev);
  }
  return prev;
}, refB);

output; /*  => 
  prev-2 RaGhiB-haSAN
  next-2 lowercase
  prev-2 raghib-hasan
  next-2 deslugify
  prev-2 raghib hasan
  next-2 uppercase

  RAGHIB HASAN

  THE OPERATION OF REDUCE GOING UP THERE ^
  prev is ref val RaGhiB-haSAN
  next is lowercase filter
  lowerase filter is called on prev
  prev is now raghib-hasan which is returned
  next is deslugify filter
  deslugify filter is called on prev
  prev is now raghib hasan which is returned
  next is uppercase filter
  uppercase filter is called on prev
  prev is now RAGHIB HASAN which is returned
 */
