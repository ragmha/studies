# 🔥 Modern JavaScript

## Table of Contents
1. [Modern JavaScript Features](#modern-javascript-features)
2. [TypeScript](#typescript)
3. [Browserless JavaScript with Node.js](#browserless-javascript-with-nodejs)
4. [JavaScript Async Flow Control](#javascript-async-flow-control)
5. [Webpack](#webpack)
6. [Reference](#reference)

## Modern JavaScript Features

## Getters/ Setters
> Getters and Setters are psudo-properties that return or set a dynamically computed value


#### Example 1 
```javascript

let obj = {
	a : 7,
	
	get b() {
		return this.a + 1;
	},
	
	set b(x) {
		this.a = x / 2;
	}
	
}

obj.a; // => 7

obj.b; // => 8 (Getting b)

obj.b = 50 // => (Setting a value to b)

obj.a // => 25 (Getting b)

```

#### Example 2

```javascript
let obj = {
	firstName: "Raghib",
	lastName: "Hasan",
	
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	
	set fullName(value) {
		let fullNameArr = value.split(" ");
		this.firstName = fullNameArr[0];
		this.lastName = fullNameArr[1];
	}
	
}

obj.fullName; // => Raghib Hasan

obj.fullName = "21 Savage"; // => Setting new FullName

obj.firstName; // => 21

obj.lastName; // => Savage

```

* `get` - is a property that enables us to dynamically retrieve the value of properties based on the internal state of the object.

* `set` - is the opposite and enables us to dynamically set the state of an internal property of an object.

### Why are they valuable ?

 Getters and Setters allow us to dynamically generate properties based on the current state of the object and to dynamically modify the values of an objects properties by setting them.

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Object.keys

> Converting the keys of an object to an array

#### Example 1

```javascript
let dictionary = {
	"yolo" : "what you say before doing something crazy",
	"gg": "good game, also used sarcastically when you win",
	"swag": "swag swag"
};

let keys = Object.keys(dictionary);

let upperKeys = keys.map(key => key.toUpperCase());

upperKeys; // => ["YOLO", "GG", "SWAG"]

```

#### Example 2

```javascript
let obj = {
	"one" : 1,
	"two" : 2,
	"three" : 3
}

// Traditional Way

/*
for (var key in obj) {
	if (obj.hasOwnProperty(key)) {
		console.log(obj[key]);
	}
}
*/


let keys = Object.keys(obj);

let timesTwo = keys.map(key => obj[key] * 2);

timesTwo; // => [2, 4, 6]

```

### What it does ?
Object.keys is a function on the Object constructor that takes in an object and outputs that object into an array

### Why is it valuable ?
Array's have far more useful helper methods and by using Object.keys instead of traditional `for(var key in obj)` syntax it is much easier to chain transformational methods to the object in the same way we would do with an array

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Var, Let & Const
> ES5 `var` is not block scoped can have unexpected behavior. `let` & `const` are block scoped to fix this.

#### Example 1

```javascript

// ES5 var 
var str = "hi"

if (true) {
    var str = "bye";
}

str; // => "bye"


// ES6 let
let str1 = "hi"

if (true) {
    let str = "bye";
}

str;// => "hi"


// ES6 const
const str2 = "hi";

if (true) {
    str2 = "bye";
}

str2; //=> error: "hi" is read-only 

```

#### Example 2

```javascript

var day = "today";

if (true) {
	var day = "tommorow";
	
}

day // => tommorow


// Hoisting process

var day = undefined;
day = "today"
day = "tommrow"

day // => tommorow

```

### What are the `let` & `const` keywords ?

* `let` is just like `var` except it is blocked scoped, which prevents variables from being hoisted to the top of our scope during javascript declaration, which is what occurs with `var` keyword.

* `const` is just like `let` except for it cannot be reassigned after it has been intialized with a value. It is also block scoped.


## Why is it useful?

* Blocked scoped variables declarations behave similar to most other languages. when using ES2015 you should always use `let`and `const` instead of `var`;

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Arrow Functions
> Maintaining parent object scope in callback functions.


#### Example 

```javascript
// ES5
var object = {
    collection: ["raghib", "don", "jack" ],
    domain: "facebook.com",
    method: function method() {
        var mapEmail = function (item) {
            return item + "@" + this.domain;
        }.bind(this);

        return this.collection.map(mapEmail)
    }
}

obj.method() // => ["raghib@facebook.com", "don@facebook.com", "jack@facebook.com"]

// ES6
let object = {
    collection: ["raghib", "don", "jack" ],
    domain: "facebook.com",
    method() {
        return this.collection.map(item => `${item}@${this.domain}`);
    }
}

obj.method() // => ["raghib@facebook.com", "don@facebook.com", "jack@facebook.com"]


```

* Solution of losing parent scope to use .bind(this) on callback function / create a copy of `this`and reference the copy inside the callback function

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Template Strings
> Template Strings are using the back tick symbol for multi-line strings and string interpolation


#### Example 1

```javascript
let myData = {
    data: 'hello'
}

let template = `
    <div>
        ${ myData.data }
    </div>
`

template /* =>
     <div>
      hello
    </div>
*/
```

### What are Template Strings?
Template strings are the use of the back-tick symbol (`) to open and close a multi-line string. Template strings also allow for string interpolation using the ${ data } syntax

### Why are they valuable?
With ES5, the way we had to create template strings was by concatenating a large number of strings together and to spend time organizing our various quotes and plus signs.

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Destructuring
> Destructuring is a way to pluck properties off of a data structure and assign them to distinct variables

#### Example 1
```javascript

let prism = {
    l: 5,
    w: 8
}

function rectPrismArea({l, w, h = 10}) {
    return l * w * h;
}

rectPrismArea(prism); // => 400

```

### What is Destructuring ?

You can destructure a data structure by referencing an object's property names inside the curly braces

```javascript
let object = { "a" : 1, "b" : 2 };

let {a , b} = object;

a; // => 1

b; // => 2
```

### Why is it valuable ?

In Modern Libraries and Frameworks, it is common in import statements to pluck specific modules from an exported file

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Rest Parameters
> If the last named argument is prefixed with `...`, the argument collects itself and all consecutive arguments.

### Example 1
```javascript
// ES5
printArguments (1, 2, 3) /* => 
    arguments: 1
    arguments: 2
    arguments: 3
*/

function printArguments() {
    var args = [].slice.call(arguments, 0);
    args.forEach(function(arg) {
        console.log("arguments:", arg);
    });
}

// ES6
printArguments (1, 2, 3) /* => 
    rest args: 1
    rest args: 2
    rest args: 3
*/

function printArguments(...args) {
    args.forEach(arg => console.log("rest args:" , args));
}
```



## Difference between rest parameters and the arugment object

1. rest parameters are only the ones that haven't been given a seperate name, while the arguments object contain all arguments passed to the function.

2. the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied directly on it.

3. the arguments object has additional functionality specific to itself (like callee property)


**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Spread Operator
> Spread operators are conceptually the opposite of rest parameters. Enables dynamic expansion of an expression

### Example1

```javascript
// ES6
let nums = [1, 2, 3];

function addEverything(x, y, z) {
    return x + y + z;
}

let val = addEverything(...nums);

val; // => 6


// ES5
var nums = [1, 2, 3];

function addEverything(x, y, z) {
    return x + y + z;
}

var val = addEverything.apply(this, nums);

val; // => 6


```

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Enhanced Object Literals
> Syntatical sugar for dynamic property generation in object literals.

### Example1
```javascript
let obj = {
    handler() {
      ["prop_" + 42] : "life"  
    }
};

obj.prop_42; // => life
```

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Classes
> Syntatical sugar over JS existing prototype-based inheritance.

#### Example1

```javascript
// ES6
class App {
    constructor() {
        console.log("hello");
    }

    method() {
        console.log("method called");
    }
}

var app = new App();
app.method(); /* =>
    "hello"
    "method called"
*/

// ES5
function App() {
    console.log("hello");
}

App.prototype.method = function() {
    console.log("method called");
}

var app = new App();
app.method(); /* =>
    "hello"
    "method called"
*/


```

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Modules
> Modules allow code sharing between javascript files

### Example1

```javascript
// require files
import something from "framework";

import * as something from "framework";

import {matchedProp} from "framework";

// expose values
export default function something {}

export var value = "value";
export var another = "value2";

export var matchedProp = "someValue";

```

### Example2

**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------
## TypeScript
> Super set of JavaScript

**[⬆ back to top](#table-of-contents)**

## Intro

### Example

```typescript
    var name: string = "john"; // => explicitly defining a type of string
    var age: number = 23;
    var flag: boolean = false;

    name = false; // => type boolean is not assignable of type string


    const log = (item: string): string => {
        return item;
    }

    log(2) // => arugmnet of type number is not assignable of type string
    log("hello") // => works! hello

    const names: Array<string> = [] // or  const names: string[] = []
```
**[⬆ back to top](#table-of-contents)**

## Interfaces
> Type checking focusing on the shape that values have. Sometimes known as "duck typing" or "structural subtyping"

* Creating a blue-print for object

### Example

```typescript
interface BakedGood {
    sugar: number;
    name: string;
    bake(mins: number): string;
    icing?: boolean; // => optional
}

const cake: BakeGood = {
    sugar : 23,
    name: "Chery Cake",
    bake(mins: number) {
        return `will be done in ${mins}`;
    }
}
```

**[⬆ back to top](#table-of-contents)**

## Classes

### Example

```typescript

interface Vehicle {
    make: string;
    year: number;
    type: string;
    go(): void;
}
class Car implements Vehicle {
    type: string = " ";

    constructor(public make: string, public year: number) {
    }

    go(): void {

    }

}
```
**[⬆ back to top](#table-of-contents)**

## Decorators
> Function that decorates a target(class, method, parameter, accessor(get/set))

### Example1

```typescript
function clean(value: boolean) {
    return function(target) {
        target.clean = value;
    }
}

@clean(true)
class Animal {

}

```

### Example2

```typescript
// Normal
const person = { name : "raghib"};

function addAge(age) {
    return function(person) {
        return {
            age,
            name: person.name
        }
    }
}

// We decorated the new Person with age
const newPerson = addAge(20)(person);

newPerson; /* => 
    {
    age: 20,
    name: "raghib"
    }
*/


// Using Decorators
function addAge(age) {
    return function(targetClass) {
        return class {
            name = new targetClass().name;
            age = age;
        }
    }
}

@addAge(20)
class Person {
    name = "Raghib";
}

new Person(); /* => 
    {
    age: 20,
    name: "raghib"
    }
*/
```
**[⬆ back to top](#table-of-contents)**

## Static Properties
> It's possible to create static members of a class, those that are visible on the class itself rather than on the instances, it is used prepending this, infront of instant accesses.

## Example
```typescript
class Grid {
    static origin = { x: 0, y: 0};

    calculateDistanceFromOrigin(point: {x: number, y: number}) {
        let xDist = {point.x - Grid.origin.x};
        let yDist = {point.y - Grid.origin.y};
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) {}
}
```


**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Browserless JavaScript with Node.js
**[⬆ back to top](#table-of-contents)**

## Introduction
> Using Node.js, without the use of DOM with the help of NPM package which allows us to run JavaScript locally in our node.js environment.
**[⬆ back to top](#table-of-contents)**

## NPM
> psst use Yarn

> NPM, node package manager, is a registry for JavaScript packages that allows us to download our Node.js dependencies locally using a CLI. One of the benefits of Node.js is not having to download our dependencies from a CDN each time we start our app. NPM provides us with a registry that we’re able to find packages for anything JavaScript which includes frameworks, utilities, polyfills, or even other package managers.

### npm install
In Node.js, we load our JavaScript dependencies using require() and providing the name of our package require('underscore'). This will load the corresponding package and return the value from that package. These packages are installed the thenode_modules/ folder. Here are a couple of examples. 
```javascript
npm install underscore 
npm install lodash
```

### node_modules/
The folder for our JavaScript dependencies that Node.js looks inside to load our packages when we use require().

### package.json
A .json file that Node.js reads to understand which script to run by looking for the path provided by the main field.

### npm init
NPM provides us with a command in their CLI initialize a package.json for when want to create our own packages for Node.js

### NPM scripts
NPM also provides us with scripts object within package.json that it will run within our terminal. This is great when creating simple common tasks that we run a lot during development of our package. For example, we use the npm run followed by the task. 
```javascript
npm run build 
npm run test 
npm run deploy
```

### dependencies and devDependencies
dependencies are always downloading for our package. devDependencies are only installed when we’re developing our package so this is where we install any build tooling our testing tools. If we use --save or --save-dev we can save our packages without our package.json 
```javascript
npm install underscore --save 
npm install lodash --save-dev
```

### npm install --global for CLI
NPM also allows us to install packages globally which is often used for interacting with other CLI’s written in JavaScript. Examples of these are test runners or build tools 
```javascript
npm install --global gulp-cli 
npm install --global trash-cli 
npm install --global karma-cli
```

### npm uninstall and npm uninstall --global
NPM also allows us to uninstall packages which we may use more so with --global but we can also provide --save or --save-dev to remove the package from ourpackage.json
**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## JavaScript Async Flow Control
**[⬆ back to top](#table-of-contents)**

## Promises
> Allows us to pass around a chain of asynchronous tasks that will be fired off as soon as the promise is created. We use Promises a better way to deal with writing async flow control compared to callback style. Doing so allows us to reason what is happening withint our codebase by isolating logic that starts off asynchronous operations

### Example
```javascript

// Test

function done() {
  console.log('I have all the titles', '\n');
}
getRandomSpaceTitle(function(data) {
  console.log('Space Tilte: ', data, '\n')
})
getRandomCatTitle(function(data) {
  console.log('Cat Tilte: ', data, '\n')
})
getRandomKittenTitle(function(data) {
  console.log('Kitten Tilte: ', data, '\n')
})
done();

// callback style
function getRandomSpaceTitle(callback) {
  getTitle('space')
    .then(json => {
      callback(json)
    });
}
function getRandomCatTitle(callback) {
  getTitle('cat')
    .then(json => {
      callback(json)
    });
}
function getRandomKittenTitle(callback) {
  getTitle('kitten')
    .then(json => {
      callback(json)
    });
}
getRandomSpaceTitle(data => {
  console.log(`Space Ttile: ${data}`);

  getRandomCatTitle(data => {
    console.log(`Cat Title: ${data}`);

    getRandomKittenTitle(data => {
      console.log(`Kitten Title: ${data}`);
      done();
    });
  });
});

// Promises

function getRandomSpaceTitlePromise() {
  return getTitle("space");
}

function getRandomCatTitlePromise() {
  return getTitle("cat");
}

function getRandomKittenTitlePromise() {
  return getTitle("kitten");
}

// Test

getRandomSpaceTitlePromise()
  .then(data => {
    console.log(`Space Ttile Promise: ${data}`);
    return getRandomCatTitlePromise();
  })
  .then(data => {
    console.log(`Cat Ttile Promise: ${data}`);
    return getRandomKittenTitlePromise();
  })
  .then(data => {
    console.log(`Kitten Ttile Promise: ${data}`);
    done();
  });

function getTitle(title) {
  let uri = `https://www.reddit.com/r/${title}.json`;
  return fetch(uri)
    .then(res => res.json())
    .then(json => json.data.children)
    .then(posts => posts.map(post => post.data.title))
    .then(json => {
      let len = json.length;
      let randomIndex = Math.floor(Math.random() * len);
      return json[randomIndex];
    });
}


```


## Callback style flow control
Callback style is great only for one level compared to nested callbacks. Trying to understand what is available to us within a callback can be challenging with we're more than one callback deep

## Working with promises to convert a callback style to promise
A promise object simply has a `.then` that we can invoke with our callback. You can think of a promise like a gift wrapped present that is opened once we reached a certain time or event. We can only open the present once to get it's value. The `.then()`callbacks are actions that we fire off after the initial promise is resolved (in our analofy our present is resolved once we reached a certain date.)

## Returning a promise to create a promise chain
The best feature of promises are the chains we can create. We create a promise chain by simply invoking `.then()` and providing a callback. We can also return another promise that needs to be resolved before counting down our promise chain.

## Catching errors throwin in promise with `.catch()`
Catching error is another great aspect of promises because it give us a standard way of interacting with errors. If we include a `.catch` in the middle of our promise chain then any errors thrown before it will be caught. We can now choose to rethrow to continue the next `.catch` call or handle the error and pass a value that will continue the chain.

## How to return `Promise.reject()` to pass the error down the pipeline
We can also return other values rather than using throw by returning a wrapped value with `Promise.reject()`

## Running Promises in parallel with `Promise.all()`
We can also fire off many async tasks and wait until they are all done before running another task. Composing promises are great because `Promise.all()` also returns another promise.

## Create our own promise with `new Promise()`
We can create our own promise to wrap other async interfaces or any custom asynchronous tasks that we want to create a standard way of interacting with. 



**[⬆ back to top](#table-of-contents)**

## Observable-intro
**[⬆ back to top](#table-of-contents)**

## Observable-example
**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## Webpack
**[⬆ back to top](#table-of-contents)**

## Introduction
**[⬆ back to top](#table-of-contents)**

## Config
**[⬆ back to top](#table-of-contents)**

## Dev-Server
**[⬆ back to top](#table-of-contents)**

## Loaders
**[⬆ back to top](#table-of-contents)**

## Plugins
**[⬆ back to top](#table-of-contents)**

--------------------------------------------------------------------------------

## 🔍 Reference
[Modern JavaScript](http://courses.angularclass.com/courses/84542/lectures/1223851)