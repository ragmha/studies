1. The signum of a number is 1 if the number is positive, –1 if it is negative, and 0 if it is zero. Write a function that computes this value.

```scala
def signum(n: Int)= {
 if (n > 0) 1 else if (n < 0) -1 else 0
}

println(signum(10), signum(-10), signum(0)) //=> `(1, -1, 0)`
```
