9. Improve the solution of the preceding exercise by collecting the positions that should be moved and their target positions. Make those moves and truncate the buffer. Don’t copy any elements before the first unwanted element.

```scala
import scala.collection.mutable.ArrayBuffer

val aB = ArrayBuffer(99, -5, 2, -4, 7, -1, 3, 5)
(for(i <- aB.indices if aB(i) < 0) yield i)
.drop(1)
.reverse
.foreach(aB.remove(_))

aB // => ArrayBuffer(99, -5, 2, 7, 3, 5): ArrayBuffer[Int]
```
