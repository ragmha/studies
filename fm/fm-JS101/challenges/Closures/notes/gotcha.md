# Continuation of Closure


```js

// #1
var sayAlice = function() {

    var makeLog = function() {
      console.log(alice);
    };

    var alice = 'Why hello there, Alice!';

    return makeLog;
};


var whatDoesSheSay = sayAlice();

console.log(whatDoesSheSay()); // 'Why hello there, Alice!'


/*
  var sayAlice = undefined;
  SKIPS THE FUNCTION BODY
  var whatDoesSheSay = undefined;
  sayAlice() is called
  GO INTO FUNCTION BODY
  var makeLog = undefined;
  SKIPS THE FUNCTION BODY
  var alice = undefined;
  assigns "Why hello there, Alice!" to alice
  returns makeLog function body to whatDoesSheSay


  alice has a value because its initialized before returning makeLog



  NOTES:
    named-function aren't hoisted

*/

```



```js

var makeStopWatch = function() {
  console.log('initialized');
  var elapsed = 0;
  console.log(elapsed);

  var stopWatch = function() {
    console.log('stopwatch');
    return elapsed;
  }

  var increase = function() { elapsed++; };
  setInterval(increase, 1000);

  return stopWatch;
};

var watch = makeStopWatch();
var otherWatch = makeStopWatch();

console.log(watch());

console.log(otherWatch());

console.log(watch());
console.log(watch());


/*

 THIS IS CREATED ONCE:
  console.log('initialized');
  var elapsed = 0;
  console.log(elapsed);

*/
```
