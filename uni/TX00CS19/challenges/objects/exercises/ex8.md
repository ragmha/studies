8. Write an enumeration describing the eight corners of the RGB color cube.
As IDs, use the color values (for example, 0xff0000 for Red).

```scala
object X extends App {

  object RGBCube extends Enumeration {
    type Color = Value
    val Black = Value(0x000000, "Black")
    val Red = Value(0xff0000, "Red")
    val Green = Value(0x00ff00, "Green")
    val Yellow = Value(0xffff00, "Yellow")
    val Blue = Value(0x0000ff, "Blue")
    val Cyan = Value(0x00ffff, "Cyan")
    val Magenta = Value(0xff00ff, "Magenta")
    val White = Value(0xffffff, "White")
  }

  for (c <- RGBCube.values) println("0x%06x: %s".format(c.id, c))
}

```
