4. Given an array of integers, produce a new array that contains all positive values of the original array, in their original order, followed by all values that are zero or negative, in their original order.

```scala
val a = Array[Int](2,6,-1,9,0,-4,-6)
val result = new ArrayBuffer[Int]

result.appendAll(for(i <- 0 until a.length if(a(i) > 0)) yield a(i))
result.appendAll(for(i <- 0 until a.length if(a(i) <= 0)) yield a(i))
result.toArray //=> Array(2, 6, 9, -1, 0, -4, -6): Array[Int]
```

```scala
import scala.collection.mutable.ArrayBuffer

val a = Array[Int](2,6,-1,9,0,-4,-6)
val positive, negative = new ArrayBuffer[Int]

for (i <- 0 until a.length) {
  if (a(i) > 0) positive += i
  else negative += i
}

positive // => ArrayBuffer(0, 1, 3): ArrayBuffer[Int]

negative // => ArrayBuffer(2, 4, 5, 6): ArrayBuffer[Int]

val result = new ArrayBuffer[Int]
result ++= (for (i <- positive) yield a(i))
result ++= (for (i <- negative) yield a(i))

result.toArray // => Array(2, 6, 9, -1, 0, -4, -6): Array[Int]

```
