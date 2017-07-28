# Pure Functions

* Pure functions have no side-effects

* Pure function calls to immutable data are often easy to reorder

* Pure functions calls to immutable collections are often easy to parallelize

## The Map Operation
> This takes in function, applies it to each member of a collection, and returns the result

```scala
val weekDays = List("Mon", "Tue", "Wed", "Thu", "Fri")
weekDays.map(_ == "Mon")
// res0: List[Boolean] = List(true, false, false, false, false)
```
