4. Scala lets you multiply a string with a number—try out "crazy" * 3 in the REPL. What does this operation do? Where can you find it in Scaladoc?

> It returns the current string concatenated 3 times

```scala
 "crazy" * 3 // res1: String = crazycrazycrazy
```

> It is found in `StringOps` class under `scala.collection.immutable` package
