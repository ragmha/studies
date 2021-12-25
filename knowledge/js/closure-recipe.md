# Closure Recipe

- 1] Create your parent function

```javascript
function checkScope() {
  ...
  ..
  ..
  .
};
```

- 2] Define some variables in the parent's local scope

```javascript
... {
  var innerVar = "local scope";
  ..
  ..
  ...
};
```

- 3] Define a function inside the parent function. We call this a child.

```javascript
... {
  ...

  function innerFunc() {
      return ...;
  };

  ....

};
```

- 4] Return that function from inside the parent function

```javascript
.... {
  ...
  ...
  .....

  return innerFunc;
};
```

## The entire thing 😮

```javascript
function checkScope() {
  var innerVar = "local scope";

  function innerFunc() {
      return innerVar;
  };

  return innerFunc;
};
```

## Execution 😮

- 1) Run parent function and save to a variable. This variable will hold whatever the function `RETURNS`.

- 2) optional: check what that variable holds as its value. (Hint: it should be the inner function)

- 3) Run the inner function

- 4) What happens?????

```javascript
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
