# Callbacks

```js
var ifElse = function(condition, isTrue, isFalse) {

  if(condition) {
    isTrue;
  } else {
    is False
  }
};

ifElse(true,

  function() {console.log(true);},

  function() {console.log(false);}
);


// Cleaner version

var ifElse = function(condition, isTrue, isFalse) {

  if(condition) {
     isTrue();
  } else {
     isFalse();
  }
};


var logTrue = function() {
  console.log(true)
};

var logFalse = function() {
  console.log(false)
}

ifElse(true, logTrue, logFalse);
```
