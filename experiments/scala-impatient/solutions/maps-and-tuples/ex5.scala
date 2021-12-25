/**
* Exercise 5:
*
* Repeat the preceding exercise with a java.util.TreeMap that you adapt to the
* Scala API.
*
**/

import scala.collection.JavaConversions.mapAsScalaMap

val fileName = "test.txt"
val in = new java.util.Scanner(new java.io.File(fileName)).useDelimiter("\\s")

var freq: scala.collection.mutable.Map[String, Int] = new java.util.TreeMap[String, Int]

while(in.hasNext()) {
  val word = in.next()
  freq(word) =  freq.getOrElse(word, 0) + 1
}

println(freq)
