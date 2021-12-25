/**
* Exercise 6:
* Write a for loop for computing the product of the Unicode codes of all
* letters in a string.
* For example, the product of the characters in "Hello" is 9415087488L.
*
**/

var prod:BigInt = 1

for(c <- "Hello") prod *= c

prod // => 9415087488: BigInt
