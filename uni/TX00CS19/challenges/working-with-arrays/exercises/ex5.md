5. How do you compute the average of an Array[Double]?

```scala
val d = Array[Double](1.0, 2.0, 3.0, 4.0, 5.0)

val result = d.sum/ d.length // => 3.0: Double
```

```scala
val d = Array[Double](1.0, 2.0, 3.0, 4.0, 5.0)

// d.reduce((x, y) => x + y)
val result = d.reduce(_ + _) / d.length // => 3.0: Double
```

```scala
val d = Array[Double](1.0, 2.0, 3.0, 4.0, 5.0)

val result = d.reduceLeft(_ + _) / d.length // => 3.0: Double
```

```scala
val d = Array[Double](1.0, 2.0, 3.0, 4.0, 5.0)

val result = d.foldLeft(0.0)(_ + _) / d.length // => 3.0: Double
```
