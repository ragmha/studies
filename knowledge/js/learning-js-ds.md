# TABLE OF CONTENT 🚀 `[2/12]`

|   Topics                         |  Status |
| :------------------------------- |  :----  |
|  [Overview](#overview)           |  🔥     |
|  [Arrays](#arrays)               |  🔥     |
|  Stacks                          |  🚧     |
|  Queues                          |  🚧     |
|  Linked Lists                    |  🚧     |
|  Sets                            |  🚧     |
|  Dictionaries and Hashes         |  🚧     |  
|  Trees                           |  🚧     |
|  Graphs                          |  🚧     |
|  Sorting and Searching Algorithms|  🚧     |    
|  Patterns of Algorithm           |  🚧     |  
|  Algorithm Complexity            |  🚧     |  

----
# Overview 😼

## Operators

| Arithmetic operator |      Description                              |
| --------------------| ----------------------------------------------|
| +                   | Addition                                      |
| -                   | Subtraction                                   |
| *                   | Multiplication                                |  
| /                   | Division                                      |
| %                   | Modulus                                       |
| ++                  | Increment                                     |
| --                  | Decrement                                     |
| =                   | Assignment                                    |
| +=                  | Addition assignment (x += y) == (x = x + y)   |
| -=                  | Subtraction assignment (x -= y) == (x = x - y)|
| *=                  | Multiplication assignment (x *= y) == (x = x * y)|
| /=                  | Division assignment (x /= y) == (x = x / y) |
| %=                  | Remainder assignment (x %= y) == (x = x % y)|

| Comparison operator  |      Description                             |
| ---------------------| ---------------------------------------------|
| ==                   | Equal to                                     |
| ===                  | Equal to (value and object type both)        |
| !=                   | Not equal to                                 |
| >                    | Greater than                                 |
| >=                   | Greater than or equal to                     |
| <                    | Less than                                    |
| <=                   | Less than or equal to                        |

| Logical operator |  Description  |
| -----------------| ------------- |
| &&               |  And          |
| <code>&#124;&#124;</code>|  Or   |
| !                |  Not          |

| Bitwise operator    |  Description |
| --------------------| -----------|
| &                   | And        |
| <code>&#124;</code> | Equal to   |
| ~                   | Not        |
| ^                   | Xor        |
| <<                  | Left shift |
| >>                  | Right shift|

```javascript
// BIT OPERATOR Examples
(5 & 1) //=> 1
(5 | 1) //=> 5
(~5) //=> -6
(5 ^ 1) //=> 4
(5 << 1) //=> 10
(5 >> 1) //=> 2
```

## Truthy and falsy

| Value type    |  Result    |
| --------------| -----------|
| undefined     | false      |
| null          | false      |
| Boolean       | true is true and false is false |
| Number        | The result is false for +0, -0, or NaN; otherwise, the result is true |
| String | The result is false if the string is empty (length is 0); otherwise, the result is true (length > 1) |
| Object |  true |

## Functions of the equals operators (== and ===)

----

# Arrays 😼
> An array is the simplest memory data structures

* An array stores values sequentially that are all of the same datatype
* Adding elements, reference the last free position of the array and assign a value to it
* Array is a mutable object
* The object will grow dynamically as new elements are added

```javascript
var arr = [1, 2, 3, 4]

arr[arr.length] = 5

arr // => [1, 2, 3, 4, 5]
```
---
## Adding elements

* `push` method allows to add new elements to the end of the array, you can pass multiple arguments

---
## Inserting elements to the First position
* Free the first position by shifting all the elements to the right and then assigns a new value (-1) to the first element

```javascript
  for (var i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i-1];
  }
  numbers[0] = -1
```
### OR
* Use the built-in `unshift` method
* Add the value to the beginning of the  array
```javascript
 var arr = [1, 2, 3, 4]
 arr.unshift(-2)
 arr //=> [-2, 1, 2, 3, 4]
```
---
## Removing elements

* Use `pop` method to remove a value from the end of an array
```javascript
 var arr = [1, 2, 3, 4]
 arr.pop() //=> 4
 arr //=> [1, 2, 3]
```
---
## Removing elements from the first position

* Shift all the elements one position to the left.
* Length should remain same
* Overwrite the original array value

```javascript
for (var i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1]
}
```
## OR
* Use the built-in `shift` method
* Removes the value from the beginning of the array
```javascript
 var arr = [1, 2, 3, 4]
 arr.shift() //=> 1
 arr //=> [2, 3, 4]
```
---
## TIP 💡
* `push` and `pop` methods allow array to emulate a basic `Stack` data structure

* `shift` and `unshift` methods allow array to emulate a basic `Queue` data structure
---

## Adding and Removing elements from a specific position
* Use `splice` method to remove an element from an array, specifying the position/index that we would like to delete and how many elements we would like to remove

```javascript
var arr = [1, 2, 3, 4]
arr.splice(1, 2) // => [2, 3]
arr // => [1, 4]

// Starts from index 1 and deletes 2 elements from that index
```
* You can use delete operator on arrays and objects, `remove arr[0]`, its similar to `arr[0] = undefined`, thus its better to use `splice`, `pop` or `shift`

---

## Inserting numbers 2 and 3 back
```javascript
var arr = [1, 2, 3, 4]
arr.splice(1, 2) // => [2, 3]
arr // => [1, 4]

arr.splice(1,0,2,3) // => [2, 3]
arr // => [1, 2, 3, 4]

// Starts from index 1 and deletes 2 elements from that index
```
---

## Removing 3 elements, starting from index 1 and adding elements 2 and 3
```javascript
var arr = [1, 2, 3, 4]
arr.splice(1,3,2,3,4); // => [2, 3, 4]
arr // => [1, 2, 3, 4]
```
----

## 2 dimensional array
```javascript
//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;
```

```
    [0] [1] [2] [3]
[0]  72  75  79  79  ...
[1]  81  79  75  75  ...
```
---

## Iterating over 2 dimensional array
```javascript
function printMatrix(myMatrix) {
  for (var i =0 ; i < myMatrix.length; i++) {
    for (var j=0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j])
    }
  }
}
```
---

## Multi-dimensional arrays

```javascript
// Creates a 3x3x3 matrix
var matrix3x3x3 = [];
for (var i = 0; i< 3; i++) {
  matrix3x3x3[i] = [];
  for (var j = 0; j<3; j++) {
    matrix3x3x3[i][j] = [];
    for(var k = 0; k < 3; k++) {
      matrix3x3x3[i][j][k] = i + j + k;
    }
  }
}
```

```javascript
// Prints a 3x3x3 matrix
for (var i = 0; i < matrix3x3x3.length; i++) {
  for (var j = 0; j < matrix3x3x3[i].length; j++) {
    for (var k = 0; k < matrix3x3x3[i][j].length; k++){
      console.log(matrix3x3x3[i][j][k])
    }
  }
}
```
---

## Joining multiple arrays

* Iterating each array and adding each element to the final array, using `concat` method
* Multiple args can be passed to the concat method, order matters

```javascript
var zero = 0
var positiveNumber = [1, 2, 3]
var negativeNumber = [-3, -2, -1]
var numbers = negativeNumber.concat(zero, positiveNumber)
```
---
## Iterator functions
* Beside `for` statement, there is a `built-in iterator methods` for arrays

### Iterating using `every` method
```javascript
var isEven = x => x % 2 === 0

var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

num.every(isEven) //=> false
```

### Iterating using `some` method
```javascript
var isEven = x => x % 2 === 0

var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

num.some(isEven) //=> true
```

### Iterating using `forEach`
```javascript
var isEven = x => x % 2 === 0

var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

num.forEach(x => console.log(x%2 == 0)) /*
  false
  true
  false
  true
  false
  true
  false
  true
  false
  true
  false
  true
  false
  true
  false
*/
```

### Using `map` and `filter`
* Iterator methods on array, that returns a new array with a result

## map
* Stores the result of isEven func, passed to map method and returns a new array
```javascript
var isEven = x => x % 2 === 0

var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

num.map(isEven) //=> [false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
```

## filter
* Returns a new array with elements that the function returned true
* Contains the elements that are multiple of 2

```javascript
var isEven = x => x % 2 === 0

var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

num.filter(isEven) //=> [2, 4, 6, 8, 10, 12, 14]
```

## Using `reduce` method
* `reduce` method receives a function with `previousValue`, `currentValue`, `index` and `array`
* Useful if we want to sum up all values in array

```javascript
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

num.reduce((prev, curr, index) => prev + curr); // => 120
```

## NOTE ⚠️
* Array class has two important methods: `map` and `reduce`
* `map`, map values when given a function
* `reduce`, reduce the array containing the values that match a function
* `filter`, filter values when given a function

---

## Iterating using forEach with arrow functions
* To simplify coding
```javascript
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

num.forEach(x => x % 2 == 0)
```

## Iterating using the for...of loop
* Iterates through he values of an array
```javascript
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (let n of num) {
  console.log((n % 2 == 0) ? 'even' : 'odd')
} /*
 odd
 even
 odd
 even
 odd
 even
 ...
*/
```
---
## Using the ES6 iterator (@@iterator)
* Array class has a prop named `@@iterator`
* Can be used by access `Symbol.iterator` prop of the array
* Retries the next value of the array
* `iterator.next()`, returns an object with `value`, `done` key
* Returns `undefined` when no more value to be iterated

```javascript
  var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  let iterator = num[Symbol.iterator]()

  iterator.next().value; // => 1
  iterator.next().value; // => 2
  iterator.next().value; // => 3
  iterator.next().value; // => 4
  iterator.next().value; // => 5
```

## Array entries, keys, and values
* ES6 has 3 ways of retrieving iterators from an array:

### 1) `entries` method
* Returns an `@@iterator`, that contains `key/value` pairs
* the num array used below, contains only numbers thus key is the position of array and the value is the value stored in the array index

```javascript
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let aEntries = num.entries() // retrieve iterator of key/value
aEntries.next().value // => [0, 1] - pos 0, val 1
aEntries.next().value // => [1 ,2] - pos 1, val 2
...
```

### 2) `keys` method
* Returns an `@@iterator`, that contains `key` of the array
* the num array used below, keys will be indexes of array
* For no values, it will return undefined as value, done will be false, meaning no more keys of the array to iterate

```javascript
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let aKeys = num.keys() // retrieve iterator of key
aKeys.next() // => {value: 0, done: false }
aKeys.next() // => {value: 1, done: false }
....
aKeys.next() // => {value: undefined, done: true}
```

### 3) `values` method
* Returns an `@@iterator`, that contains `value` of the array

```javascript
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let aValues = num.values() // retrieve iterator of values
aKeys.next() // => {value: 1, done: false }
aKeys.next() // => {value: 2, done: false }
....
aKeys.next() // => {value: undefined, done: true}
```
----
## Using the from method
* Create a new array from an existing one
* Used for copying the array number into a new one

```javascript
// Filtering evens from num
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let evens = Array.from(num, x => x % 2 == 0) /*
[false, true, false, true, false, true, false, true, false, true, false, true, false, true, false]
*/
```
---

## Using Array.of
* Creates a new array from arguments passed to the method

```javascript
let num1 = Array.of(1)
let num2 = Array.of(1,2,3,4,5,6)

// Similar to
/*
let num1 = [1]
let num2 = [1,2,3,4,5,6]
*/

// Makes a copy of existing array
let numCopy = Array.of(...num2)
```
---

## Using fill method
* Fills the array with a value

```javascript
let numCopy = Array.of(1,2,3,4,5)

numCopy.fill(0) // => [0,0,0,0,0]

numCopy.fill(2,1) // => [0,2,2,2,2]

// Fills array with 1 from index 3 -> 5
numCopy.fill(1, 3, 5) // => [0, 2, 2, 1, 1, 2]

// Great for creating and initializing its value
let ones = Array(6).fill(1)

```
---

## Using copyWithin method
* Copies a sequence of values of the array into the position of a start index
* Shallow copy
* Doesn't modify the size
* Mutable method

```javascript
let copyArr = [1, 2, 3, 4, 5, 6]

// Copies values 4,5,6 to the first 3 position
copyArr.copyWithin(0, 3)

// Copies value 4,5(position 3, 5) to position 1 and 2
copyArr.copyWithin(1, 3, 5)

```
---
## Sorting elements
* `reverse` method
```javascript
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
num.reverse() // => [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```
* `sort` method
```javascript
var num = [2,10,1,-1,45,22,100,72]
num.sort() // => [-1, 1, 10, 100, 2, 22, 45, 72]

// You need a comparisonFunction to sort them in ascending order
num.sort((a, b) => a - b); // => [-1, 1, 2, 10, 22, 45, 72, 100]
```

## Custom sorting
* Create a comparisonFunction and add to the sort method

```javascript
var friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25}
];

function comparePerson(a, b) {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
}

friends.sort(comparePerson) /* =>
  [ {name: 'Ana', age: 20},
    {name: 'Chris', age: 25},
    {name: 'John', age: 30}
  ];
*/
```

## Sorting strings
* JS compares each character according to its ASCII values
* The names have decimal ASCII values A: 65, J: 74, a: 97, and j: 106.

```javascript
 var names =['Ana', 'ana', 'john', 'John']
 names.sort() // => ["Ana", "John", "ana", "john"]

 function compareNames(a ,b) {
   if (a.toLowerCase() < b.toLowerCase()) return -1
   if (a.toLowerCase() > b.toLowerCase()) return 1
   return 0
 }

 names.sort(compareNames) // => ["Ana", "ana", "John", "john"]

//============================================================//
 // For accented characters

var names2 = ['Maève', 'Maeve']
names2.sort((a, b) => a.localeCompare(b)) // => ["Maeve", "Maève"]
```
---

## Searching
* `indexOf`, returns index of first element it matches with the argument passed
* `lastIndexOf`, returns the index of last element found that matches with the argument passed

```javascript
let num = [100, 20, 10, 4, 2, 10, 10000]

num.indexOf(10) // => 2
num.indexOf(-1) // => -1
num.lastIndexOf(10) // => 5
```
## ES6 find and findIndex methods
* `find` and `findIndex` takes a callback
* `find` returns the first value of the array
* `findIndex` returns the index of the first value of the array

```javascript
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let multiplesOf13 = (elem, indx, arr) => elem % 13 == 0

num.find(multiplesOf13) // => 13
num.findIndex(multiplesOf13) // => 12
```

## ES7- using the includes method
* `includes` method returns `true` in case an element is found or else `false`

```javascript
let num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

num.includes(15) // => true
num.includes(20) // => false

// Passing a starting index to start search for the value
// Does 12 exist after 10
num.includes(12, 10) // => true
```

## TypedArray class
* Created to work with arrays with a single datatype
* Great to work with WebGL APIs
* Manipulate bits
* Manipulate files
* Manipulate images

