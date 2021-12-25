# The "this" keyword

## Intro

The `this` keyword

* Allows us to re-use functions with different context or in other words allows us to decide which objects should be focal when invoking a function or a methods.

## Where is this function invoked ?

```javascript
var sayName = function(name) {
    console.log("Hello," + name);
}

sayName("Raghib"); // => we wouldn't know what name is passed until we invoke it, this is similar to `this-keyword` in a function until that function is invoked
```


## Implicit Binding (80% use-case)
> Look to the Left of the Dot at call time

## Example1
```javascript
var me = {
    name: "Raghib",
    age: 24,
    sayName() {
        console.log(this.name); // => `this` is `me`
    }
};


me.sayName(); // => "Raghib" (Looks at the left of dot when invoked)
```

## Example2

```javascript

var sayNameMixin = function(obj) {
    obj.sayName = function() {
        console.log(this.name);
    }
}

var me = {
    name: "Raghib",
    age: 24,
};

var you = {
    name: "John",
    age: 24,
  
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName(); // => Raghib
you.sayName(); // => John
```

## Example 3

```javascript
var Person = function(name, age) {
    return {
        name,
        age,
        sayName() {
            console.log(this.name);
        },
				mother: {
					name: "Stacey",
					sayName() {
						console.log(this.name);
					}
				}
    }
}

var jim = Person("Jim", 42);

jim.sayName(); // => "Jim"

jim.mother.sayName(); // => "Stacey" (Always check left of the dot to see what `this` is referencing to)
```



## Reference

[eggHead](https://egghead.io/)