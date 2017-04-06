3. Repeat the preceding exercise with an immutable map.

```scala
val fileName = "test.txt"
var freq= Map[String, Int]()
val in = new java.util.Scanner(new java.io.File(fileName)).useDelimiter("\\s")

while(in.hasNext()) {
  val word = in.next()
  freq += (word -> (freq.getOrElse(word, 0) + 1 ))
}

println(freq)
```
