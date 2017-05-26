/**
* Exercise 8:
*
* Write a function minmax(values: Array[Int]) that returns a pair containing the
* smallest and the largest values in the array.
*
**/

def minmax(values: Array[Int]) = {
   (values.min, values.max)
}
​
minmax(Array(1 , 10 , 2, 4 , 100)) // => (1, 100): (Int, Int)
