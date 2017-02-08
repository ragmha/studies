# Visualization of the call stack 📞

> `one thread` === `one call stack` === `one thing at a time`

```javascript
// Example
 function multiply(a, b) {
   return a * b;
 }

 function square(n) {
    return multiply(n, n);
}

function printSquare(n) {
   var squared = square(n);
   console.log(squared);
}

printSquare(4);
```
## NOTES:
*   `call stack` is a `data structure` which `records` basically where in the program we are

*   If we `step into` a `function`, we put something on to the `stack`, if we `return` from a `function`, we `pop` `off` from the `top` of `stack`

## Let's run this file 🏃

## 🔨 STEP 1
```javascript
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |      main()     |  <--- // There is kind of main function, like the file
 |_________________|       // itself, we push that on to the stack.

```

## 🔨 STEP 2

```javascript
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  printSquare(4) |
 |      main()     |  <-- // It goes through the file `main()`, the `function
 |_________________|     // defination` and once we get to `printSquare`. Since
                         // `printSquare` is a `function call`, so we push it on
                         //  to the stack.
```

## 🔨 STEP 3

```javascript
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |    square(n)    |
 |  printSquare(4) |  <-- // Inside `printSquare`, we immediately call
 |     main()      |      // `square` and push it on to the stack
 |_________________|

```

## 🔨 STEP 4

```javascript
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  multiply(n, n) |
 |    square(n)    |  <-- // Inside `square`, we  immediately call `multiply`
 |  printSquare(4) |      // and push it on to the stack
 |     main()      |
 |_________________|

```

## 🔨 STEP 5

```javascript

// INITIAL
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  multiply(n, n) |  <-- // `multiply` returns `a` and `b`, so as stated above
 |    square(n)    |      //  whenever we `return` something we `pop` off from
 |  printSquare(4) |      // `stack`
 |     main()      |
 |_________________|


// RESULT  poof - it's gone 💥
 _________________
|      stack      |
|                 |
|                 |
|                 |
|                 |
|                 |
|     *poof*      |
|    square(n)    |
|  printSquare(4) |
|     main()      |
|_________________|

```

## 🔨 STEP 6

```javascript

// INITIAL
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |    square(n)    |   <--- //`square` returned `mutiply(n, n)`, so we `pop` it
 |  printSquare(4) |        // off the stack
 |     main()      |
 |_________________|


// RESULT  poof - it's gone 💥
 _________________
|      stack      |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|     *poof*      |
|  printSquare(4) |
|     main()      |
|_________________|

```

## 🔨 STEP 7

```javascript

// INITIAL
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  printSquare(4) | <-- // Inside `printSquare`, it calls `console.log(squared)`
 |     main()      |     // Since it's a function call we push it to the stack
 |_________________|


// RESULT
 _____________________
|        stack        |
|                     |
|                     |
|                     |
|                     |
|                     |
|                     |
| console.log(squared)|
|    printSquare(4)   |
|        main()       |
|_____________________|

```

## 🔨 STEP 8

```javascript

// INITIAL
 _____________________
|        stack        |
|                     |
|                     |
|                     |
|                     |
|                     |
|                     |
| console.log(squared)| <--- // `console.log(squared)` returns the
|    printSquare(4)   |      // `logged square` so we `pop` it `off` the `stack`
|        main()       |
|_____________________|

// RESULT  poof - it's gone 💥
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |     *poof*      |
 |  printSquare(4) | <-- // Inside `printSquare`, it calls `console.log(squared)`
 |     main()      |     // since it's a function call we push it to the stack
 |_________________|

```

## 🔨 STEP 9

```javascript

// INITIAL
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |  printSquare(4) |  <--- //`printSquare(n)` has no `return`, as it's `implicit`
 |     main()      |       //  we `pop` it off the stack
 |_________________|


// RESULT  poof - it's gone 💥
 _________________
|      stack      |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|     *poof*      |
|     main()      |
|_________________|

```

## 🔨 STEP 10

```javascript

// INITIAL
  _________________
 |      stack      |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |                 |
 |     main()      |   <--- // Since there no `function call` left we `pop` off
 |_________________|        // `main()` from the stack


// RESULT  poof - it's gone 💥
 _________________
|      stack      |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|                 |
|      *poof*     |
|_________________|

```
## DONE 👍
