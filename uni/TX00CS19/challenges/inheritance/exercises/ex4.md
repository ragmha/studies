4. Define an abstract class Item with methods price and description.
A SimpleItem is an item whose price and description are specified in the
constructor. Take advantage of the fact that a val can override a def. A Bundle
is an item that contains other items. Its price is the sum of the prices in the
bundle. Also provide a mechanism for adding items to the bundle and a suitable
description method.

```scala
import collection.immutable.List

 abstract class Item {
   def description: String
   def price: Double
   override def toString = "%s(%s: %.2f)".format(this.getClass.getSimpleName, description, price)
 }

  class SimpleItem( override val description: String, override val price: Double) extends Item

  class Bundle extends Item {
    private var items: List[Item] = List()

    def add(item: Item) = {
      items = item :: items
    }

    def description: String = items.map(_.description).mkString(", ")

    def price: Double = items.map(_.price).sum
  }


  var Stuffs: List[Item] = List(
    new SimpleItem("Macbook", 2120.200),
    new SimpleItem("Iphone", 423.40)
  )

  val bundle = new Bundle
  bundle.add(new SimpleItem("IpAD", 5234.0))
  bundle.add(new SimpleItem("Air Book", 2324.40))


  Stuffs = bundle :: Stuffs // Adds bundle to stuffs using (::) operator

  Stuffs.foreach(println(_))
  /* =>
      Bundle(Air Book, IpAD: 7558.40)
      SimpleItem(Macbook: 2120.20)
      SimpleItem(Iphone: 423.40)
  */
```
