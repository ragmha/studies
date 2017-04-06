9. Make the function of the preceding exercise a recursive function.

```scala
def recproduct(s: String): BigInt = {
  if(s.length == 0) 1 else s.head * recproduct(s.tail)
}

recproduct("Hello") //=> 9415087488: BigInt
```
