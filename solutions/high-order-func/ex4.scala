/**
* Exercise 4:
*
* The previous implementation needed a special case when n < 1. Show how you can
* avoid this with foldLeft. (Look at the Scaladoc for foldLeft. It’s like reduceLeft,
* except that the first value in the chain of combined values is supplied in the call.)
*
**/

def factorial(num: Int) = (1 to num).foldLeft(1)(_ * _)

factorial(5)
