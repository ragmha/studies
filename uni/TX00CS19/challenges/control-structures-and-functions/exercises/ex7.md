7. Solve the preceding exercise without writing a loop. (Hint: Look at the StringOps Scaladoc.)

```scala
"Hello".map(BigInt(_)).product //=> 9415087488: BigInt

// OR
"Hello".foreach((c:Char) => prod *= c)
println(prod) //=> 9415087488: BigInt
```
