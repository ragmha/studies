# JavaScript as a Functional Programming Language?

## In JavaScript functions are first-class citizens
>  Wait what does that mean ? 🤔

## Function as Data

```javascript
var name = "Raghib template";

var f = function sayHello(name) {
  return "Hello, "  + name;
}


console.log(f.name);  // sayHello
console.log(f.call(null, name)); // Hello, Raghib template
// OR we can call directly
f(name);  // Hello, Raghib template
```

## Function as Arguments

```javascript
var sayHello = function(){
  console.log("Hello World");
}

setTimeout(sayHello, 2000);
```
## Function as Returned Value

```javascript
var add = function(x){
  return function(y){
    return x + y;
  };
};

var add1 = add(1);
console.log(add1(41)); // 42
```

## Higher-order function
>  A function that takes another function as an argument or returns a function as a result

## Closures 🙅

```javascript
var add = function(x){
  return function(y){
    return x + y;
  };
};

var add1 = add(1);
console.log(add1(41)); // 42
```

## Anonymous Functions 💀

```javascript
// ES5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const divisibleByTwo = numbers.filter(function(n){
  return n % 2 === 0;
});

console.log(divisibleByTwo); // [2, 4, 6, 8 ,10]

// ES6
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const divisibleByTwo = numbers.filter(n => n % 2 === 0);

console.log(divisibleByTwo); // [2, 4, 6, 8 ,10]
```

## Lamda expression
>  A function defined without being bound to an identifier


## So Is JavaScript a Functional Language ? 🤔

---
## Functional
---
*   First-class functions

*   Closures

*   Anonymous functions(lamda)

---
## Non Functional
---
*   Mutable

*   Object oriented

*   No pattern matching

*   No algebric types
