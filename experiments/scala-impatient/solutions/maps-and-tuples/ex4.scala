/**
* Exercise 4:
*
* Repeat the preceding exercise with a sorted map, so that the words are printed
* in sorted order.
*
**/

import scala.collection.immutable.SortedMap

val fileName = "test.txt"
var freq= SortedMap[String, Int]()
val in = new java.util.Scanner(new java.io.File(fileName)).useDelimiter("\\s")

while(in.hasNext()) {
  val word = in.next()
  freq += (word -> (freq.getOrElse(word, 0) + 1 ))
}

println(freq)
