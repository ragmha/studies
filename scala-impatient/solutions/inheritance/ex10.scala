/**
* Exercise 10:
*
* The file scala/collection/immutable/Stack.scala contains the definition
*
  class Stack[A] protected (protected val elems: List[A])
*
* Explain the meanings of the protected keywords. (Hint: Review the discussion
* of private constructors in Chapter 5.)
*
**/

class Person protected(protected val name: String) {
  def this(n: String, age: Int) {
    this(n)
  }
}

class Manager(n:String) extends Person(n)

// A protected constructor can only be accessed by an auxiliary constructor from same or descendant class

val P = new Person("John", 42)
val M = new Person("Paul")
