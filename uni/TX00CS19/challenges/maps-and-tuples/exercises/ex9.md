9. Write a function lteqgt(values: Array[Int], v: Int) that returns a triple containing the counts of values less than v, equal to v, and greater than v.

```scala
def lteqgt(values: Array[Int], v: Int) = {
	(values.count(_ < v), values.count(_ == v), values.count(_ > v))
}

lteqgt(Array(1,2,3,4,5,6,7,8,9), 5) // => (4, 1, 4): (Int, Int, Int)
```
