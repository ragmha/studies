# Functional Programming

## 1. Higher Order Functions

A function that takes and or returns another function is called a **higher order function**. It's "higher order" because it operates on functions, in anddition to strings, numbers, arrays, etc.

In JavaScript functions are first-class like **strings**, **bools**, **objects**, **array**, etc

With **functions**, you can:

- Store them as variables
- Insert them into arrays
- Assign them as object properties
- Pass them as arguments
- Return them from other functions

Our life revolves around abstraction- the practice of making complext things easier to increase productivity.

E.g map, filter and reduce

With the help of HOF, everything can be declarative, abstracted at the value and action level and remain coherent.

pipe let's you run functions in a sequence.

- Functions let us communicate code through actions, allowing for more meaningful and comprehensible discussions.

- Higher order functions supercharge this by allowing us to abstract at an even higher level

## 2. Functional Composition

Compose means to create by combining things

## 3. Ramda

Benifits include currying, point-free and data-last pattern

- **Everything's is curried**. a curried function can be supplied some parameters now and others later. Ramda's map "preloads", returning a new function that expects a list to operate on.
- **Point-Free,** means parameter is not mentioned and don't explicitly define the data which is being operated on. Also, it's more declarative

`const upperAndReverseFirstNames = map(upperAndReverseFirstName)`

    instead of:

    `const upperAndReverseFirstNames = (users) => users.map(upperAndReverseFirstName)`

- **Data Last,** by design ramda's function are curried and take the data last, allowing for the best point-free, declarative JavaScript possible. Combine functions until you are ready for a liftoff

### Summary

- Curried functions can take some parameters now and others later by returning a function
- Point-free functions don't show their arguments, making them even briefer than their pointed counterparts.
- Ramda's function take their data last, making point-free easy as possible

## 4. Currying

- Main benifit is code resuse. Curried functions have a better chance of being useful in different scenarios making them DRYer
- You can store curried functions as variable

### Summary

- Curried functions keep returning functions until all required parameters are given
- This lets us partially apply a function and create a more specialized versions
- "Properly" curried functions return one function per argument. (a) ⇒ (b) ⇒ (c). instead of (a, b, c)

## Exercise

```tsx
import { add, reduce } from "ramda"

// point-free
const sum = reduce(add, 0)
```

## 5. Pipe

Pipe allows us to compose by flowing them from **left-to-right,** structuring them like a sequence of events. The leftmost function runs first, then passes its output to the next function and so on.

So far we have learned about HOF's, data-last functions, currying and point-free style. They all tie down to **Function Composition** (where it becomes obvious where our functions perform multiple steps involving data)

`more complex === more variables`

The more steps your function has, the more of those variables you'll need. It becomes noisy and limits how declarative our code can be.

## 6. Compose

Compose allows us to compose data by flowing them from **right-to-left.** It mirrors the mathematical form of composition- the innermost function goes first

## 7. Inspecting with Tap

Trace pipe and compose calls using tap or a normal function also works

## 8. Comparators

Comparators turn any comparing function into a sorting function

`**path**`- allows you easily to compare things no matter how nested their properties are

`**comparator**`

## 9. Conditional Logic

- **ifElse**

```tsx
import { always, equals, ifElse } from "ramda"

const logAccess = ifElse(
  equals(true),
  always("Access granted."),
  always("Access denied.")
)

logAccess(true)
```

- **when/unless**

Sometimes you only need `**if**` statement, and the `**else**` returns the value unchanged

**when** takes 3 arguments:

1. Predicate (function that returns true or false)
2. Function to run if predicate returns true
3. The value to use

```tsx
import { when, multiply } from "ramda"

const isEven = (num) => num % 2 === 0

const doubleIfEven = when(isEven, multiply(2))
```

Convinently, Ramda allows us to express the opposite logic using **unless**

```tsx
import { unless, multiply } from "ramda"

const isEven = (num) => num % 2 === 0

const doubleIfOdd = unless(isEven, multiply(2))
```

## 10. Cond

```tsx
import { always, equals, pipe, when } from "ramda"

const findAnimal = pipe(
  when(equals("lion"), always("Africa, and India")),
  when(equals("tiger"), always("China, Russia, India, Vietnam, and many more")),
  when(equals("hyena"), always("African Savannah")),
  when(equals("grizzly bear"), always("North America"))
)

console.log(findAnimal("cow"))
```

```tsx
import { cond } from 'ramda';

const findAnimal = cond([
	[equals('lion'), always('Africa, and India')],
	[equals('tiger'), always('China, Russia, India, Vietnam, and many more')],
  [equals('hyena'), always('African Savannah')],
  [equals('grizzly bear'), always('North America')],
  [always(true), always('Not sure try Googling it!') // default case
])

console.log(findAnimal('cow'))
```

```tsx
const byPrice = descend(prop('rating'))

const getTop3MealsFor = pipe(
	(maxPrice, menu) => menu.filter(propSatisfies(gte(maxPrice), 'price'),
  sort(byPrice),
  slice(0, 3)
)
```

```tsx
const toUSD = (amount) =>
  amount.toLocaleString("en-US", { style: "currency", currency: "USD" })
```

# 12. Functors

Fp defines its own types and functors. It's a container that holds any value. It can be a string, date, boolean, array, object

The container must have a map method to be considered a functor

```tsx
const Identity = (x) => ({
  value: x,
  map: (fn) => Idenitity(fn(x)),
})
```

Identity takes a value and returns a **functor (value & map)**

```tsx
const name = Indentity('Bobo')

const newName = name
.map(value => value.slice(0, 3)
.map(value => value.toUpperCase)
```

This way it is immutable, easier to read and compose better

## Summary

- Functors are **containers** you can map over
- Functors can hold any value
- **map** is composable, immutable way to change a functor's value

```tsx
import { map, multiply } from "ramda"

const functor = [1, 2, 3]
const result = map(multiply(2), functor)

const functor2 = { x: 1, y: 2, z: 3 }
const result = map(multiple(2), functor)

const functor3 = "Hello"
const result = map(concat("yay"), functor3)
```

Anything that can be looped over and transformed, so map supports them

map can even be overriden using a special method

```tsx
import { map, multiply } from "ramda"

const functor = {
  value: 10,
  "fantasy-land/map": () => "You have been overridden!",
}

const result = map(multiply(2), functor)
console.log(result)
```

Summary:

- Ramda's map works with arrays, objects and strings
- Functors with a `fantasy-land/map` method can override map and return whatever

# 13. Lenses

Lenses focus on a piece of data structure. They're composable and provide geat ways to read/update the focused piece.

It let's you "zoom in" on a particular piece of a data structure.

Has **Setters** and **Getters**

## Getters

```tsx
import { lensProp, view } from "ramda"

const person = {
  firstName: "Bobo",
  lastName: "Flakes",
}

const fNameLens = lensProp("firstName")
const result = view(fNameLens, person)
```

lensProp creates a lens focused on an object's property. In this case, **fNameLens** will find any object's **firstName** property. Passing it to **view** with our **object**

## Setters

---

```tsx
import { lensProp, set } from "ramda"

const person = {
  firstName: "Bobo",
  lastName: "Flakes",
}

const fNameLens = lensProp("firstName")
const result = set(fNameLens, "Bobo Jr.", person)
```

using a function `over` can help

```tsx
import { concat, lensProp, over } from "ramda"

const person = {
  firstName: "Bobo",
  lastName: "Flakes",
}

const fNameLens = lensProp("firstName")
const result = over(fNameLens, cocat("Mr. "), person)
```

Note that set and over didn't mutate the original person object. Ramda functions don't mutate their inputs but instead return a new output.

```tsx
import { lensPath, set, view } from "ramda"

const person = {
  firstName: "Bobo",
  lastName: "Flakes",
  company: "Fake Inc.",
  position: {
    title: "Front-End Developer",
    department: {
      name: "Product",
      departmentManager: {
        firstName: "Bobo Sr.",
        lastName: "Flax",
      },
    },
  },
}

const managerLastNameLens = lensPath([
  "position",
  "department",
  "departmentManager",
  "lastName",
])

const correctPerson = set(managerLastNameLens, "Flakes", person)
const correctedLastName = view(managerLastNameLens, correctPerson)
```
