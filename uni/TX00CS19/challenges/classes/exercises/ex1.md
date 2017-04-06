1. Improve the Counter class in Section 5.1, “Simple Classes and Parameterless Methods,” on page 55 so that it doesn’t turn negative at Int.MaxValue.


```scala
class Counter {
  private var value = 0
  def increment() { if(value < Int.MaxValue) value += 1 }
  def current = value
}

var myCounter = new Counter
myCounter.increment()
myCounter.current
```
