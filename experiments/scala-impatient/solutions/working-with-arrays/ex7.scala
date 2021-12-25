/**
*
* Exercise 7:
* Write a code snippet that produces all values from an array with duplicates
* removed. (Hint: Look at Scaladoc.)
*
**/


// 1
val a = Array[Int](1, 1, -10, 100, -10, 101)
​
val result = a.distinct // => Array(1, -10, 100, 101): Array[Int]



// 2
val a = Array[Int](1, 1, -10, 100, -10, 101)
​
val result = a.toSet.toArray // => Array(1, -10, 100, 101): Array[Int]
