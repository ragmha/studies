1. Set up a map of prices for a number of gizmos that you covet. Then produce a second map with the same keys and the prices at a 10 percent discount.

```scala
val gizmos = Map("MAC" -> 3500, "iPhone" -> 12345, "SpaceShip" -> 1045600)

val discountgizmos = for((k, v) <- gizmos) yield (k, v * 0.9)

discountgizmos // => Map("MAC" -> 3150.0, "iPhone" -> 11110.5, "SpaceShip" -> 941040.0): Map[String, Double]
```
