// Create a Shallow Copy of an Array with Slice
// Array.prototype.slice();

// Example1
var items = [ 1, 2, 3, 4, 5 ];
var copy = items.slice();
// shallow copy,
// doesn't affect original array
// litterally copies the values in the array
// if it contains object references, then references are copied not object
copy.push(6);
copy[0] = 100;

console.log(items);
console.log(copy);

// Example 2 (with objects)
var person = { name: 'raghib' };

var items = [ 1, person ];
var copy = items.slice();

// copies the reference of person not object (NOTE!!!)
copy[1].name = 'meow';

// This effects both the original and the copy array :(
console.log(items);
console.log(copy);

// Example 3 : (Not only copy but it also takes a subsection)
var items = [ 1, 2, 3, 4, 5 ];
var copy = items.slice(0, 2);
// start index: 0 , end index: 2
var copy2 = items.slice(4);
// start index: 4
var copy3 = items.slice(-1);
// start index: 4
console.log(copy);
console.log(copy2);
console.log(copy3);

// Practical (object)
var person = { name: 'raghib-hasan' };

var filters = {
  deslugify: x => x.replace('-', ' '),
  uppercase: x => x.toUpperCase()
};

var input = 'name | deslugify | uppercase';

// RAGHIB HASAN
var sections = input.split('|').map(x => x.trim());

// [name, deslugify, uppercase]
var ref = person[sections[0]];

var output = sections.slice(1).reduce(
  (prev, next) => {
    if (filters[next]) {
      return filters[next].call(null, prev);
    }
    return prev;
  },
  ref
);

console.log(output);

// Another example
var person = { name: 'RaGhiB-haSAN', age: 23 };

var filters = {
  lowercase: x => x.toLowerCase(),
  deslugify: x => x.replace('-', ' '),
  uppercase: x => x.toUpperCase()
};

var input = 'name | lowercase | deslugify | uppercase';

var sections = input.split('|').map(x => x.trim());

var ref = person[sections[0]];

var output = sections.slice(1).reduce(
  (prev, next) => {
    if (filters[next]) {
      console.log('prev-2', prev);
      RaGhiB - haSAN;
      console.log('next-2', next);
      lowercase;
      return filters[next].call(null, prev);
    }
    return prev;
  },
  ref
);

console.log(output);
/* THE OPERATION OF REDUCE GOING UP THERE ^

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
