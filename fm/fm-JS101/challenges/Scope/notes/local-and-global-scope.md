# Scope

> Scope is where our variables have meaning

* Accessing a variable outside scope will not exist and will throw an error.

* Scope is created dynamically, whenever a function is called.

* `function(){ ...`` <--function body` is a representation of scope.

* A new scope is created everytime we call a function

## Local Scope

```
var func = function() {
  var local = true;
};

console.log(local); // Reference error
```

## Global Scope

```
var x = 'global';

var func = function() {
  z = 'global here, too!'

  window.y = 'also global!';
};
```
