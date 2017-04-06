2. Write a program that reads words from a file. Use a mutable map to count how often each word appears. To read the words, simply use a java.util.Scanner:

```scala
val in = new java.util.Scanner(new java.io.File("myfile.txt"))
while (in.hasNext()) process in.next()
```

Or look at Chapter 9 for a Scalaesque way.
At the end, print out all words and their counts.
```

```scala
import scala.collection.mutable

val fileName = "test.txt"
val freq= new mutable.HashMap[String, Int]()
val in = new java.util.Scanner(new java.io.File(fileName)).useDelimiter("\\s")

while(in.hasNext()) {
  val word = in.next()
  freq(word) = freq.getOrElse(word, 0) + 1
}

println(freq)
```
