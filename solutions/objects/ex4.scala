/**
* Exercise 4:
*
* Define a Point class with a companion object so that you can construct Point
* instances as Point(3, 4), without using new.
*
**/

object X extends App {

  object Point{
    def apply(x: Int, y: Int) = new Point(x, y)
  }

  class Point(val x: Int, val y: Int)  {
    override def toString = s"(${x},${y})"
  }

  var p = Point(3, 4)
  println(p) // => (3,4)
}
