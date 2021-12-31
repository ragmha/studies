// Maps and WeakMaps with ES6

const myMap = new Map();

/**
 *  API
 *  set()
 *  get()
 *  size
 *  clear()
 *  has()
 */

myMap.set('foo', 'bar');
myMap.set('hello', 'world');

// get value of 'foo'
myMap.get('foo'); // => bar

// get size of map
myMap.size; // => 2

// clears myMap
// myMap.clear()

// check if 'foo' is in myMap
myMap.has('foo'); // =>  true

/**
 * ITERATORS
 *  keys()
 *  entries()
 *  values()
 */

// logs keys from myMap
for (var key of myMap.keys()) {
  console.log(key);
} /* => 
foo
hello
*/

// logs values from myMap
for (var key of myMap.values()) {
  console.log(key);
} /* => 
bar
world
*/

// Iterate over entries
for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
} /* => 
foo = bar
hello = world
*/

// WEAK MAPS
// no references are held to the keys of the Map
// allows it available for garbage collection
// enumerable

var myMap2 = new WeakMap();
var myObj = {};
var myFunc = function() {};

myMap2.set(myObj, 'bar'); // => WeakMap {}
myMap2.set(myFunc, 'word'); // => WeakMap {}
//console.log(myMap.set('string',2));

/**
 * Iterators are not available in WeakMap
 */
