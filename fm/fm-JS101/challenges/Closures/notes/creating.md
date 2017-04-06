# Creating a Closure

```js
var closureAlert = function() {
  var x = 0;
  var alerter = function() {
    alert(++x); // increments 1 to x and then return it or else vise versa for x++
  };
  return alerter; // returns function definition
};

var funcStorer = closureAlert(); /* function() { alert(++x); }; */
var funcStorer2 = closureAlert(); /* function() { alert(++x); }; */

funcStorer(); // alerts 1
funcStorer(); // alerts 2

// funcStorer is our closure, and by calling it more than once we can continue
// to have access to the parent scope
```
