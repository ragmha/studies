3. Write a class Time with read-only properties hours and minutes and a method before(other: Time): Boolean that checks whether this time comes before the other. A Time object should be constructed as new Time(hrs, min), where hrs is in military time format (between 0 and 23).

```scala
class Time(val hrs: Int, val min: Int) {
  def before(other: Time): Boolean = {
    (hrs < other.hrs) || (hrs == other.hrs && min < other.min)
  }
}

var T = new Time(12, 60)
var T2 = new Time(10, 20)

T.before(T2) // => false
T2.before(T) // => true
```
