/**
* Exercise 2:
*
* Write a loop that swaps adjacent elements of an array of integers. For example
* , Array(1, 2, 3, 4, 5) becomes Array(2, 1, 4, 3, 5).
*
**/

// 1
val a = Array(1, 2, 3, 4, 5)

val result = for(i <- 0 until a.length by 2 if (i < a.length -1)) {
	val temp = a(i)
  a(i) = a(i + 1)
  a(i + 1) = temp
}

a //=> Array(2, 1, 4, 3, 5): Array[Int]


// 2
val a = Array(1, 2, 3, 4, 5)

a.grouped(2).flatMap(_.reverse).toArray // => Array(2, 1, 4, 3, 5): Array[Int]


// 3
val a = Array(1, 2, 3, 4, 5)

val result = for { b <- a.grouped(2); c <- b.reverse } yield c

result.toArray // => Array(2, 1, 4, 3, 5): Array[Int]


// 4
val a = Array(1, 2, 3, 4, 5)

a.grouped(2)
  .flatMap{
   case Array(x, y) => Array(y, x)
   case Array(x) => Array(x)
  }.toArray
  // =>  Array(2, 1, 4, 3, 5): Array[Int]
