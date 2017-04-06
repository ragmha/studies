7. Write a class Person with a primary constructor that accepts a string containing a first name, a space, and a last name, such as new Person("Fred Smith"). Supply read-only properties firstName and lastName. Should the primary constructor parameter be a var, a val, or a plain parameter? Why?


```scala
class Person(name: String) {
  val firstName = name.split(' ')(0)
  val lastName = name.split(' ')(1)

  override def toString = {
    s"Person: ${firstName}  ${lastName}"
  }
}

var p = new Person("Fred smith")

println(p)
```
> Should be a plain param because it isn't used in any methods
