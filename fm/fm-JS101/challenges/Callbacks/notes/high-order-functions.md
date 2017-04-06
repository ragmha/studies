# High-Order Functions

> 1) Takes function as an input(argument)

```js
element.addEventListener("click", function() {
  console.log("element clicked!");
});
```

> 2) Returns a function as the output

```js
var add = function(num) {
  var num1 = num;

  return addToNum1 = function(num2) {
    return num1 + num2;
  };
};
```
