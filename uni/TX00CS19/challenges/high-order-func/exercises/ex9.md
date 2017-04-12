9. Implement corresponds without currying. Then try the call from the preceding exercise. What problem do you encounter?

```scala
val a = Array("Hello", "World")
val b = Array(5, 5)

def corresponds(a: Array[String], b: Array[Int], f:(String, Int) => Boolean): Boolean = {
  (a zip b).map(r => f(r._1, r._2)).reduce(_ & _)
}

corresponds(a, b, (x, y) => x.length == y)
```
