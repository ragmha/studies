3. Come up with one situation where the assignment x = y = 1 is valid in Scala. (Hint: Pick a suitable type for x.)
> A situation where x is a type of `Unit` assigned to a variable y and initialized to 1
```scala
var y: Int = 0          // => y :Int = 0
val x: Unit = y = 1     // => x :Unit = ()
```
