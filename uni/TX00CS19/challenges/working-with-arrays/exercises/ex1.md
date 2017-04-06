1. Write a code snippet that sets a to an array of n random integers between 0 (inclusive) and n (exclusive).

```scala
val n = 10
val a = new Array[Int](n)

a //=> Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0): Array[Int]

for(i <- 0 until n) a(i) = scala.util.Random.nextInt(n)

a // =>
Array(6, 7, 8, 1, 4, 8, 3, 8, 4, 6): Array[Int]
```
