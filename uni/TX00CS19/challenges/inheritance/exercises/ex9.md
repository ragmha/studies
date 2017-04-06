9. In the Creature class of Section 8.10, “Construction Order and Early
Definitions,” on page 98, replace val range with a def. What happens when you
also use a def in the Ant subclass? What happens when you use a val in the
subclass? Why?

```scala
class Creature {
  def range: Int = 10
  val env: Array[Int] = new Array[Int](range)
}

class AntA extends Creature {
  override def range = 2
}

class AntB extends Creature {
  override val range = 5
}


// def range is defined before primary constructor call
var antA = new AntA
println(antA.range) // => 2


// val range is defined after primary constructor call
var antB = new AntB
println(antB.range) // => 5


// To not get screwed up with constructor order use Early definition
// or declare val as final, lazy or early definition syntax

class AntC extends { override val range = 10000 } with Creature

var antC = new AntC
println(antC.range) // => 10000
```
