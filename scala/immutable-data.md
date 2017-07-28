# Immutable Data

> Immutable data easily leads to pure functions - and distributable code

* Encourages use of Immutable Data

* Entities are declares as Immutable using 'val'

* Commonly used collections are immutable too

## Data Is Declared Immutable Using `val`
> Such data can not be changed once defined

```scala
val PI = 3.14;
PI = 3.1411;

// Error: resassignment to val
```

## Data Is Declared Mutable Using `var`
> Use mutable data only when absolutely essential

```scala
var radius : Double = 10.0;
radius = 12.0;

// radius: Double = 12.0
```

## Common Collections Are Immutable Too
> Modifying an immutable collection returns a new collection, leaving the original unchanged

```scala
val someNumbers = List(10,20,30,40,50,60)
val stateCodes = Map("California" -> "CA",
("Vermont", "VT"))
val stateSet = Set("California","Vermont")

```
