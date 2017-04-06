# Closure Recipe

* 1] Create your parent function

```js
function checkScope() {
  ...
  ..
  ..
  .
};
```

* 2] Define some variables in the parent's local scope

```js
... {
  var innerVar = "local scope";
  ..
  ..
  ...
};

```

* 3] Define a function inside the parent function. We call this a child.

```js

... {
  ...

  function innerFunc() {
      return ...;
  };

  ....

};

```

* 4] Return that function from inside the parent function

```js
.... {
  ...
  ...
  .....

  return innerFunc;
};

```

### The entire thing 😮

```js

function checkScope() {
  var innerVar = "local scope";

  function innerFunc() {
      return innerVar;
  };

  return innerFunc;
};

```


### Execution 😮


* 1) Run parent function and save to a variable. This variable will hold whatever the function `RETURNS`.

* 2) optional: check what that variable holds as its value. (Hint: it should be the inner function)

* 3) Run the inner function

* 4) What happens?????


```js

function checkScope() {
  var innerVar = "local scope";

  function innerFunc() {
      return innerVar;
  };

  return innerFunc;
};

var test = checkScope(); // #1
test; // returns innerFunc definition
test(); // #3 returns local scope :D

```
