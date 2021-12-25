/**
* Exercise 3:
*
* Implement the factorial function using to and reduceLeft, without a loop or recursion.
*
**/

def factorial(num: Int) = (1 to num).reduceLeft(_ * _)

factorial(5) // => 120
