3.Are the res variables val or var?
> val, because reassignment is not possible on res variables

```scala
scala> Array(1,2,3)
res0: Array[Int] = Array(1, 2, 3)

scala> res0 = Array(1,2,3,4)
<console>:12: error: reassignment to val
       res0 = Array(1,2,3,4)
            ^
```
