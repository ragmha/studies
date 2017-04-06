8. Make a class Car with read-only properties for manufacturer, model name, and model year, and a read-write property for the license plate. Supply four constructors. All require the manufacturer and model name. Optionally, model year and license plate can also be specified in the constructor. If not, the model year is set to -1 and the license plate to the empty string. Which constructor are you choosing as the primary constructor? Why?

```scala
class Car(val manufacturer: String, val modelName: String, val modelYear: Int = -1 , var licensePlate: String = "") {

  def this(manufacturer: String, modelName: String, licensePlate: String) = {
    this(manufacturer, modelName, -1, licensePlate)
  }

  override def toString = {
    s"${manufacturer} ${modelName} ${modelYear} [${licensePlate}]"
  }

}

var c = new Car("Ferrari","F40",1993,"COOL921") // => c: Car = Ferrari F40 1993 [COOL921]
```




```scala
// Longer version
class Car(val manufacturer: String, val modelName: String, val modelYear: Int, var licensePlate: String) {

  def this(manufacturer: String, modelName: String, licensePlate: String) = {
    this(manufacturer, modelName, -1, licensePlate)
  }

  def this(manufacturer: String, modelName: String, modelYear: Int) = {
    this(manufacturer, modelName, modelYear, "")
  }

  def this(manufacturer: String, modelName: String) = {
    this(manufacturer, modelName, -1, "")
  }

  override def toString = {
    s"${manufacturer} ${modelName} ${modelYear} [${licensePlate}]"
  }

}

var c = new Car("Ferrari","F40",1993,"COOL921") // => c: Car = Ferrari F40 1993 [COOL921]

```

>The constructor that takes 4 values was chosen as the primary constructor, thus becomes easier for auxiliary constructor to overload constructor on special conditions using `this()` by calling the primary constructor
