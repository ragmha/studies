/**
* Exercise 7:
*
* Provide a class Square that extends java.awt.Rectangle and has three
* constructors: one that constructs a square with a given corner point and width,
* one that constructs a square with corner (0, 0) and a given width, and one that
* constructs a square with corner (0, 0) and width 0.
*
**/

class Square(x: Int, y: Int , width: Int) extends Rectangle(x, y, width, width){
  def this(width: Int) = this(0, 0, width)
  def this() = this(0, 0, 0)
}

val s1 = new Square(1, 2, 2)
println(s1) // => Square[x=1,y=2,width=2,height=2]

val s2 = new Square()
println(s2) // => Square[x=0,y=0,width=0,height=0]

val s3 = new Square(5)
println(s3) // => Square[x=0,y=0,width=5,height=5]
