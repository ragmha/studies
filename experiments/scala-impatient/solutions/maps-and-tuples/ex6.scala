/**
* Exercise 6:
*
* Define a linked hash map that maps "Monday" to java.util.Calendar.MONDAY, and
* similarly for the other weekdays. Demonstrate that the elements are visited in
* insertion order.
*
**/

import scala.collection.mutable.LinkedHashMap
import java.util.Calendar._

val weekdays = LinkedHashMap(
  "Monday" -> MONDAY,
  "Tuesday" -> TUESDAY,
  "Wednesday" -> WEDNESDAY,
  "Thursday" -> THURSDAY,
  "Friday" -> FRIDAY,
  "Saturday" -> SATURDAY,
  "Sunday" -> SUNDAY
)

for((k, v) <- weekdays) yield k.mkString("")
// => res0: scala.collection.mutable.Iterable[String] = ArrayBuffer(Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)
