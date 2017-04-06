2. The preceding problem wasn’t very object-oriented. Provide a general superclass UnitConversion and define objects InchesToCentimeters, GallonsToLiters, and MilesToKilometers that extend it.

```scala
class UnitConversion(val factor: Double) {
  def convert(value: Double): Double = factor * value
}

object InchesToCentimeters extends UnitConversion(2.54) {}

object GallonsToLiters extends UnitConversion(3.78541) {}

object MilesToKilometers extends UnitConversion(1.60934) {}



InchesToCentimeters.convert(100) // => res0: Double = 254.0
GallonsToLiters.convert(200) // => res1: Double = 757.082
MilesToKilometers.convert(300) // => res2: Double = 482.802
```
