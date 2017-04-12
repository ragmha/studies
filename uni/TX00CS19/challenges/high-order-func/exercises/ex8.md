8. In Section 12.8, “Currying,” on page 164, you saw the corresponds method used with two arrays of strings. Make a call to corresponds that checks whether the elements in an array of strings have the lengths given in an array of integers.

```scala
val a = Array("Hello", "World")
val b = Array(5, 2)

a.corresponds(b) (_.length == _) // => false
```
