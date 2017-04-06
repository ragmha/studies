// Maps and WeakMaps with ES6

var myMap = new Map();

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
console.log(myMap.get('foo'));

// get size of map
console.log(myMap.size);

// clears myMap
//console.log(myMap.clear());

// check if 'foo' is in myMap
console.log(myMap.has('foo')) // true

/**
 * ITERATORS
 *  keys()
 *  entries()
 *  values()
 */

// logs keys from myMap
for(var key of myMap.keys()) {
  console.log(key);
}

// logs values from myMap
for(var key of myMap.values()) {
  console.log(key);
}

// Iterate over entries
for(var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}



// WEAK MAPS
// no references are held to the keys of the Map
// allows it available for garbage collection
// enumerable

var myMap2 = new WeakMap();
var myObj = {};
var myFunc = function(){};

console.log(myMap2.set(myObj, 'bar'));
console.log(myMap2.set(myFunc, 'word'));
//console.log(myMap.set('string',2));

/**
 * Iterators are not available in WeakMap
 */
