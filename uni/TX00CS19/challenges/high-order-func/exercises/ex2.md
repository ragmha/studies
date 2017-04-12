2. How do you get the largest element of an array with reduceLeft?

```scala
val arr = Array(1, 25, 47, 2, 54, 0, 6)

val max = arr.reduceLeft((x , y) => if ( x > y) x else y) // => 54
```

OR

```scala
val emax = arr.reduceLeft(_ max _) // => 54
```
