6. In the Person class of Section 5.1, “Simple Classes and Parameterless Methods,” on page 55, provide a primary constructor that turns negative ages to 0.

```scala
class Person(var name: String, var age: Int = 0) {
  if (age < 0) age = 0
}
```
