# Closures and Functional Programming

```js

var add = function(num) {
  var num1 = num;

  var addToNum1 = function(num2) {
    return num1 + num2;
  }

  return addToNum1;
};

var add5 = add(5);

console.log(add5(2));


/*
var add = undefined;
skip to the bottom of function body
var add5 = undefined;
call add function
goes into the function body
var num1 = undefined;
num = 5
var num1 = 5
var addToNum1 = undefined;
skip to the bottom of function body
return addtoNum1 to add5
add5 = function(num2) {
  return 5 + num2;
}
add5(2) is called
num2 = 2;
because of closure, we have access to the prev env num1, and num1 is changed
addToNum1 = 7; which is returned
*/
```
