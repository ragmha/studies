/**
* Exercise 7:
* Solve the preceding exercise without writing a loop.
* (Hint: Look at the StringOps Scaladoc.)
*
**/

// 1 
"Hello".map(BigInt(_)).product //=> 9415087488: BigInt

// 2 (Another solution)
var prod:BigInt = 1
"Hello".foreach((c:Char) => prod *= c)
println(prod) //=> 9415087488: BigInt
