8. Write a function product(s : String) that computes the product, as described in the preceding exercises.

```scala
def product(s: String) = {
 var result:BigInt = 1
 for(c <- s) result *= c
 result
}

product("Hello") // => 9415087488: BigInt
```

```scala
def product(s: String) = s.map(BigInt(_)).product

product("Hello")  // => 9415087488: BigInt
```

```scala
def product(s: String) = {
   var result: BigInt = 1
   s.foreach(c => result *= c)
   result
}

product("Hello") // => 9415087488: BigInt
```
