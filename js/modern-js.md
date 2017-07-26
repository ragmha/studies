# 🔥 Modern JavaScript

## Table of Contents
1. [Modern JavaScript Features](#modern-javascript-features)
2. [TypeScript](#typescript)
3. [Browserless JavaScript with Node.js](#browserless-javascript-with-nodejs)
4. [JavaScript Async Flow Control](#javascript-async-flow-control)
5. [Webpack](#webpack)
6. [Reference](#reference)

## Modern JavaScript Features

## ES5 - Getters/ Setters

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


> Getters and Setters are psudo-properties that return or set a dynamically computed value

* `get` - is a property that enables us to dynamically retrieve the value of properties based on the internal state of the object.

* `set` - is the opposite and enables us to dynamically set the state of an internal property of an object.

### Why are they valuable ?

 Getters and Setters allow us to dynamically generate properties based on the current state of the object and to dynamically modify the values of an objects properties by setting them.

**[⬆ back to top](#table-of-contents)**

## ES5 - Object.keys

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

## TypeScript
**[⬆ back to top](#table-of-contents)**

## Browserless JavaScript with Node.js
**[⬆ back to top](#table-of-contents)**

## JavaScript Async Flow Control
**[⬆ back to top](#table-of-contents)**

## Webpack
**[⬆ back to top](#table-of-contents)**

## 🔍 Reference
[Modern JavaScript](http://courses.angularclass.com/courses/84542/lectures/1223851)