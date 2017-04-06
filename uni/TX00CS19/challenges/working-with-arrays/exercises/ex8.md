8. Suppose you are given an array buffer of integers and want to remove all but the first negative number. Here is a sequential solution that sets a flag when the first negative number is called, then removes all elements beyond.
Click here to view code image

var first = true
var n = a.length
var i = 0
while (i < n) {
  if (a(i) >= 0) i += 1
  else {
    if (first) { first = false; i += 1 }
    else { a.remove(i); n -= 1 }
  }
}

This is a complex and inefficient solution. Rewrite it in Scala by collecting positions of the negative elements, dropping the first element, reversing the sequence, and calling a.remove(i) for each index.

```scala
import scala.collection.mutable.ArrayBuffer

val aB = ArrayBuffer[Int](1, 1, -10, 100, -40, 101)
val pos = for(i <- aB.indices if aB(i) < 0) yield i
for(i <- pos.reverse.dropRight(1)) aB.remove(i)
aB // => ArrayBuffer(1, 1, -10, 100, 101): ArrayBuffer[Int]
```
