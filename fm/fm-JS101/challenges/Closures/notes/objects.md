# Closure objects


```js
function counter() {
  var n = 0;
  return {
    count: function() { return ++n; },
    reset: function() { n = 0;}
  }
}


var myCounter = counter();

console.log(myCounter.count()); // 1
console.log(myCounter.count()); // 2
console.log(myCounter.count()); // 3
console.log(myCounter.count()); // 4


/*
var counter = undefined;
skip it until the function body }
var myCounter = undefined;
call counter()
goes into the function body
var n = undefined;
n = 0;
return an objects with props count and reset
myCounter = Object {count: func, reset: func}
*/

```
