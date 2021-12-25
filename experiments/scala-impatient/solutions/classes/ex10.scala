/**
* Exercise 10:
*
* Consider the class

  class Employee(val name: String, var salary: Double) {
   def this() { this("John Q. Public", 0.0) }
  }
*
* Rewrite it to use explicit fields and a default primary constructor.
* Which form do you prefer? Why?
*
**/

// 1
class Employee() {
  private var _name = "John Q. Public"
  var salary  = 0.0


  def this(n: String, s: Double) {
    this();
    _name = n
    salary = s
  }

  def name = _name
}

var e = new Employee

// 2
// For more info https://stackoverflow.com/questions/10426146/constructors-in-scala-primary-auxiliary-default-primary/10999828#10999828

// Explicit Fields
class Employee(n: String = "John Q. Public", s: Double = 0.0) {
  val name = n
  val salary = s
}

// Without default parameter values
class Employee(n: String, s: Double) {
  def this() = this("John Q. Public", 0.0)
  val name = n
  val salary = s
}

// > I would prefer default params with Explicit fields, its shorter and concise
