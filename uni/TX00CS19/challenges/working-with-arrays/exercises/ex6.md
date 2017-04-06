6. How do you rearrange the elements of an Array[Int] so that they appear in reverse sorted order? How do you do the same with an ArrayBuffer[Int]?

```scala
import scala.collection.mutable.ArrayBuffer

val a = Array[Int](10, 1, -2, 100, 20)

val ab = ArrayBuffer[Int](10, 1, -2, 100, 20)

// sortWith((x,y) => x > y)
val resultA = a.sortWith(_ > _) // => Array(100, 20, 10, 1, -2): Array[Int]

val resultAB = ab.sortWith(_ > _) // => ArrayBuffer(100, 20, 10, 1, -2): ArrayBuffer[Int]

```
