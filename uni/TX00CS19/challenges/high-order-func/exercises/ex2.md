2. How do you get the largest element of an array with reduceLeft?

```scala
val arr = Array(1, 25, 47, 2, 54, 0, 6)

val max = arr.reduceLeft((x , y) => if ( x > y) x else y)
```

OR

```scala
val emax = arr.reduceLeft(_ max _)
```
