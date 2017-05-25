9. How do you get the first character of a string in Scala? The last character?

> First character of a String

```scala
val s = "Hello"

s.head  // res0: Char = H

s(0)    // res1: Char = H
```


> Last character of a String

```scala
val s = "Hello"

s.last     // res2: Char = o

s(s.length()-1)  // res3: Char = o
```
