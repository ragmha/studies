5. Provide operators that construct an HTML table. For example,

```scala
Table() | "Java" | "Scala" || "Gosling" | "Odersky" || "JVM" | "JVM, .NET"
```

should produce
```
<table><tr><td>Java</td><td>Scala</td></tr><tr><td>Gosling...
```

```scala
/**
  * Created by raghib on 4/10/17.
  */
import scala.collection.mutable.ArrayBuffer

object Ex5 extends App{

  class Table {
    private val chunks = new ArrayBuffer[String]

    def |(chunk: String) = {
      chunks += "<td>%s</td>\n".format(chunk)
      this
    }

    def ||(chunk: String) = {
      chunks +=  "</tr><tr>\n<td>%s</td>".format(chunk)
      this
    }

    override def toString = "<table><tr>\n%s<tr></table>".format(chunks.mkString)
  }

  object Table {
    def apply() = new Table()
  }


  val t = Table() | "Java" | "Scala" || "Gosling" | "Odersky" || "JVM" | "JVM,.NET"

  println(t)
}


```
