4. Reimplement the Time class from the preceding exercise so that the internal representation is the number of minutes since midnight (between 0 and 24 × 60 – 1). Do not change the public interface. That is, client code should be unaffected by your change.

```scala
class Time(val hrs: Int, val min: Int) {
  private val _time = hrs * 60 + min

  def before(other: Time): Boolean = _time < other._time

}

var T = new Time(12, 60)
var T2 = new Time(10, 20)

T.before(T2) // => false
T2.before(T) // => true
```
