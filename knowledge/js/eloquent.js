# CH1

# VALUES, TYPES, AND OPERATORS :smirk_cat:


### There are 6 basic types of values in JavaScript

* Numbers

* Strings

* Booleans

* Objects

* Functions

* Undefined values


### Numbers

* Number type are numeric values

* JS uses fixed number of bits, namely 64 to store a single number

* Without parentheses, the order is determined by the precedence of the operators

* 3 special values in JavaScript

  * Infinity

  * -Infinity

  * NaN - "not a number"

* NaN results when something doesn't yield a precise meaningful result.


### Strings

* Strings are used to represent text

* `\` - escaping the character

* `+` - concatenates(glue) the strings together

### Unary Operators

* Not all operators are symbols

* `typeof` operator - returns a string value naming  the type of the value you give it.

* **NOTE**
  * Other `operators(+,-,*,/,%,>,<)` operated on 2 values but `typeof` takes only one

  * Operators that uses 2 values are `binary`
operators.

  * Operators that uses 1 value are `unary`
operators.

  * `-` operator can be used by both binary and unary operator


### Boolean Values

* 2 values `true` & `false` - `Boolean` type

* Upper case letters are always less than lower case ones.

* Comparison is based on `Unicode` standard.

* Comparison happens from left to right

* One value in JavaScript that is not equal to itself, i.e `NaN`

```javascript
console.log(NaN == NaN) // false
```

* NaN isn't equal to the result of any other nonsensical computations.


* Logical operators(&&, || <- binary operators)(! <- unary operator)

* `Conditional operator/ Ternary operator` - it operates on 3 values, written with `?` and `:`

```javascript
console.log(true ? 1 : 2) // 1
```

* `Undefined values`- there are 2 special values:

  * `null`

  * `undefined`

  * Used to denote the absence of a meaningful value

  * Operations that don't yield a meaning full value yields undefined because they have to yield some value.

  * Difference in meaning between `undefined` and `null` is an accident in JS design.

### Automatic Type Conversion

* When an operator is applied to "wrong" type of value, JS will convert the value to the type it wants, using a set of rule that often aren't what you want or expect.This is known as `type coercion`

* it produces true only if both sides are one of `null` or `undefined`

* `0`, `NaN`, `""` indicate false

* For non automatic type conversion to happen use `===` & `!===`


### Short-circuit evaluation

* Logical Operators, they return either the original left-hand value or right-hand value.
  * `||` operator will return the value on left when it can be converted to `true` or return the value to right otherwise.

  ```javascript
  console.log(null || "user") // user

  console.log("Karl" || "user") // Karl
  ```

  * `&&` operator will return the value to its left when it can be converted to `false` or return the value to right otherwise.

  * In the case of true || X, no matter what X is—even if it’s an expression that does something terrible— the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called `short-circuit evaluation.`


=======

# Extra Notes


## Numbers

* 64 binary digits, the amount is represented as 2ˆ64, which is about 18quintillion

* Personal computers have plenty of memory (64-bit chunks) compared to older times where it was easy to cause an overflow to 8 or 16 bits

* 64-bit chunks can be overflown when dealing with truly astronomical numbers.

* Bits also store negative number, thus one bit also indicates the sign of the number.

* Non whole numbers are also represented

* Fractional numbers are written by using a dot

* Calculation with whole numbers(also called integers) are guranteed to always be precise

* Calculation with fractional numbers are generally not

* Pi cannot be precisely expressed by a finite number of decimal digits


* Numbers lose some precision when only 64 bits are available to store them.

* Treat fractional digital numbers as approximations, not precise value

* Main thing with numbers is arithmetic

* `+` and `*` symbols are called **operators**

====

# Introduction :smiley:

// The program adds the numbers from 1-10 together and prints out the result : 55

### Algorithm
     Set "total" to 0.
     Set "count" to 1.
    [loop]
      Set "compare" to "count"  
      Subtract 11 from "compare"  
      If "compare" is zero, continue at [end].  
      Add "count" to "total"
      Add 1 to "count"
      Continue at [loop].
    [end]
     Output "total".

### JavaScript (Modified algorithm)
```javascript

var total = 0;
var count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total); // 55

```
#### Perks

* Temporary value not required

* Comparison to 0 not required

## Better version

```javascript
console.log(sum(range(1,10))); // 55
```

* `range`- creates a collection of number within a range

* `sum` - computes a collection of number

====
====
## Chapter 2

# PROGRAM STRUCTURE :raised_hands:


### Expressions & Statements

* A fragment of code that produces a value is called `expression`

  * `22` or `"raghib"` is an expression.

  *  An expression between parentheses is also an expression

  * Expression can express arbitarily complex computations.

* Statement corresponds to full sentence in a human language

* A program is simply a list of statements

* An expression can be content to just produce a value

* A statement stands on its own and amounts to something only if it affects the world.

* Statements which are effected are called `side effects`

* When programs are executed, nothing observable happens.

* Every statement is terminated by a semicolon.

### Variables

* To catch and hold values - `variable`

* When a variable points at a value, it does not mean it is tied to that value forever.

* `=` operator can be used at any time on existing value to disconnect them from their current value and have them point to a new one.

```javascript
var mood = "light";
console.log(mood); // light

mood= "dark";
console.log(mood); // dark

```

* Variables are tentacles. They don't
contain values; they grasp them.

* 2 variables can refer to the same value.

* A program can access only the values it still has a hold on.

* When you need to remember something, you grow a tentacle to hold on to or reattach one of the existing tentacles to it.

```javascript
var Rgbdebt = 140;
Rgbdebt = Rgbdebt - 35;
console.log(debt); // 105
```

* When you define a variable without giving it a value, the tentacle has nothing to grasp, so it ends in the air.

* When asked for an empty variable, you will get a value `undefined`.

* A single var statement can define multiple variables, which is generally separated by commas.

```javascript
var one = 1, two = 2;
console.log(one + two); // 3
```

### Keywords and Reserved Words

* break
* case
* catch
* continue
* debugger
* default
* delete
* do
* else
* false
* finally
* for
* function
* if
* implements
* in
* instanceof
* interface
* let
* new
* null
* package
* private
* protected
* public
* return
* static
* switch
* throw
* true
* try
* typeof
* var
* void
* while
* with
* yeild
* this


### The Environment

* Collection of variables and their values that exist at a given time is called `the environment`.

* When a program starts up, environment is not empty.It contains variables as part of the language standard and etc.



### Functions

* Values provided in the default environment has the type `function`

* Function is a piece of program wrapped in a value.

* Executing a function is called `invoking, calling or applying` it.

* Values that are given to the functions are called `arguments`.


### The console.log Function

* `console.log` function writes out its arguments to `some` text output device.

* `Browser`, it lands in the JS console.

* `console.log`, it isn't a simple variable but actually an expression that retrieves the log property from the value held by the `console` variable.

### Return Values

* Majority of the functions are useful because of the side effects they produce.

* Functions also produce values instead of side effects.

E.g Math.max(2,4) // 4

* Functions that produce a value, `return` that value.

* Anything that produces a value is an expression in JavaScript, meaning that function calls can be used within larger expressions.

E.g console.log(Math.min(2,4) + 100); //102

Math.min is used as an input to the plus operator

### Prompt and Confirm

* `Confirm`- returns boolean

* `Prompt` - used to ask 'open' question, returns text as a string.

* Not used much in Modern web programming, because the resulting windows look.However, it is quite useful for toy programs and experiments.


### Control Flow

*  Programs containing statement are executed predictably from top to bottom.

* Conversion functions `String, Number & Boolean`

`=====================================>`

### Conditional Execution
```

        / ====== \
 =====>[]          =======>
        \ ====== /

```

* Written with the `if` keyword

* `if` executes or skips a statement depending on the value of a Boolean expression.

* `isNaN` returns true only if the argument it is given `NaN`.

* `else` used together with if to create 2 separate alternative execution paths.

```

        / ====== \
 =====>[]        / =======>
        \ ====== /

```

* `if else if else`

### while and do Loops

* `loop`- control flow to repeat some code.

```      
 =========>[ ]=======>
           ˆ |
           \_|        

```

* Looping control flow allows us to go back to some point in the program where we were before and repeat it with our current program state.

E.g

```
var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
} // 0  2  4

```

* `while` creates a loop which is followed by an expression in aprentheses and then a statement.

* `{ }`-used for executing multiple statements inside a loop called block.

* `!` operator converts the value to Boolean type before negating it

### For loop for(...;...;...)

* The first semicolon `initializes` the loop
* The second part is the expression that `checks` whether the loop must continue
* The third part `updates` the state of the loop after every iteration.
* Most cases, this is shorter and clearer than a `while` construct.


### Breaking out of a loop
* loop condition `false`
* `break` - immediately jumping out of the enclosing loop


### Updating variables succinctly
* counter +=1 -=1 counter++ counter--


### Dispatching a value with switch
* There is a construct called `switch`, it is intended to solve such as `dispatch` in a more direct way.

### Summary
* Program is built out of statements, which themselves sometimes contain more statements
* Statements tend to contain expressions, which themselves can built out of smaller expressions
* Putting statements one another gives you a program that is executed from top to bottom.
* Introduce disturbances in the flow of control by using conditional(if, else, and switch) and looping(while,do,for)statements.
* Variables can be used to file pieces of data under a name
* Variables are useful for tracking states in your program.
* Environment is a set of variables that are defined.
* JS systems always put a number of useful standard variables in your environment.
* Functions are special values that encapsulate a piece of a program.
* Functions can invoke them by writing functionName(argument1, argument2).Such function is called an expression which may produce a value.

======
=======

## Chapter 3

# Functions

* Tool to structure larger programs
* Reduce repetition
* Associate names with subprograms
* Isolate subprograms from each other

## Defining a Function

* Created by an expression that starts with a keyword `function`.

* Has a set of `parameters` and a `body` which contains the statements that are to be executed when function is called.

* Can have multiple parameters or no parameters at all

Example

```javascript

var power = function(base, exponent){
  var result = 1;
  for (var count=0; count < exponent; count++){
    result *= base;
  }
  return result
}

```

* Some functions produces a `value` and some just produces only a `side effect`.

* `return` statement determines the value of the function returns.`return` keyword without an expression causes it to return undefined.


### Parameters and Scopes

* parameter to a function behaves like a regular variable, but their initial values are given by the `caller` of the function

* Important property of functions is that the variables created inside them, including their parameters, are `local` to the function.

Example

```javascript

var power = function(base, exponent){
  var result = 1;
  for (var count=0; count < exponent; count++){
    result *= base;
  }
  return result
}

```

// the result variable in the power function is newly created every time the function is called and these separate incarnations do not interfere with each other.

* `Localness` of variables applies only to the parameters and to variables declared with the var keyword inside the function body.

* `Global`, variables declared outside of any function, thus being visible throughout the program.

Example

```javascript

var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x); //outside

var f2 = function() {
  x = "inside f2";
};
f2();
console.log(x); //inside f2
```

## Nested Scopes

* Functions created inside other functions produces several degrees of locality.

```javascript

var landscape = function() {
  var result = "";

  var flat = function(size) {
    for (var count = 0; count < size; count++) {
      result += "_";
    }
  };

  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++) {
      result += "'";
    }
    result += "\\";
  };

   flat(3);
   mountain(4);
   flat(6);
   mountain(1);
   flat(1);
   return result;
};

```
