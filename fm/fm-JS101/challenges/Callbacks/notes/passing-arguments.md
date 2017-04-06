# Passing Arguments

```javascript

var increment = function(n){return n + 1; };

var square = function(n){ return n * n; };

var doMathSoIDontHaveTo = function(n, func) {
  return func(n);
}


doMathSoIDontHaveTo(5, square); //25

doMathSoIDontHaveTo(4, increment); //5

````

var ifElse = function(condition, isTrue, isFalse, arg) {

  if(condition) {
     isTrue(arg);
  } else {
     isFalse(arg);
  }
};


ifElse(true, function.., function.. , 'asdf') // here we are just passing function definition
```
