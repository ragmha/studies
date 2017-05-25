/**
* Exercise 3:
*
* Repeat the preceding assignment, but produce a new array with the swapped
* values. Use for/yield.
*
**/

// 1
val a = Array(1, 2, 3, 4, 5)

val result = for(b <- a.grouped(2); c <- b.reverse) yield c

result.toArray // Array(2, 1, 4, 3, 5): Array[Int]

// 2
val a = Array(1, 2, 3, 4, 5)

val result = for(i <- 0 until a.length) yield {
	if(i % 2 != 0) a(i-1)
  else if (i == a.length -1) a(i)
  else a(i + 1)
}

result.toArray // Array(2, 1, 4, 3, 5): Array[Int]
