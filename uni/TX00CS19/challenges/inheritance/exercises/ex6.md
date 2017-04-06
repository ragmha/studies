6. Define an abstract class Shape with an abstract method centerPoint and
subclasses Rectangle and Circle. Provide appropriate constructors for the
subclasses and override the centerPoint method in each subclass.

```scala
abstract class Shape {
   def centerPoint: Point
   override def toString =  "%s(Center: %s)".format(this.getClass.getSimpleName, centerPoint.toString)
 }

 class Point(val x: Double, val y: Double) {
   override def toString = "Point(%.2f, %.2f)".format(x, y)
 }

 object Point {
   def apply(x: Double, y: Double) = new Point(x, y)
 }

 class Rectangle(val topLeft: Point, val bottomRight: Point) extends Shape {
   override val centerPoint = Point((bottomRight.x + topLeft.x) / 2 , (bottomRight.y + topLeft.y) / 2 )
 }

 class Circle(override val centerPoint: Point, val radius: Int) extends Shape


 var r = new Rectangle(Point(0,0), Point(10,10))
 println(r)

 var c = new Circle(Point(7,7), 10)
 println(c)

```
