# Arguments & Parameters


```
var sum = function(x ,y ) {
  return x + y;
};


x & y has no value --> parameters


sum(1, 2); -->1,2 arguments [actual values]

$('body').hide();

myArr.forEach(function(val){console.log(val)};)

$('button').on('click', function(val) { console.log(val)})


args:
button
body
inside console.log
val

```

## Quick review


```
var add = function(x ,y ) {
  return x + y;
};

add(3, 4, 5): //7

add(4, 10, 3); //13?
var add = function(x, y, z) {
  return y + z;
};
```

## arguments

```
var add = function(x ,y ) {
  console.log(arguments); // logs[3, 10, 5]
  return x + y;
};
```

## array-like object

```
var add = function(x, y) {
  arguments.slice(0,1); //Error
  Array.prototype.slice.call(arguments, 0); // Use this instead which works
  return a + b;
}
```

## Functions are Objects!
```
var add = function(a, b) {
  return a + b;
}

add.example = 'testing 123!';
```
