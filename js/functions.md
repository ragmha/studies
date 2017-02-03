# Functions

## Higher order functions:

*   Functions that accept other functions

*   Enchance the behavior of other functions


## Callback functions:

*   The functions that are passed into higher order functions

### Examples


```
#1

function logTenNumbers() {
    for (var i=0; i< 10; i++) {
        console.log(i);
    }
}

function runWithDebugger(fn) {
    debugger;
    fn();
}

runWithDebugger(logTenNumbers);


#2

function wakeUp() {
    console.log("Wake up!");
}

setTimeout(wakeUp,5000);


#3

var students = ['a','b','c'];

function logNames(student) {
    console.log(student);
}

forEach.students(logNames);


#4

var elem = $0;

function logClicked() {
    console.log('I was clicked!);
}

elem.addEventListener('click', logClicked);

```


### Higher order functions

*   *runWithDebugger*

*   *setTimeout*

*   *forEach*

*   *addEventListener*

### Callback functions

*   *logTenNumbers*

*   *wakeUp*

*   *logNames*

*   *logClicked*
