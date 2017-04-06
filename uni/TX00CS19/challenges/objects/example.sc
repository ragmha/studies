// Chapter 6 Objects

/*
* - Use objects for singletons and utility methods
* - A class can have a companion object with the same name
* - Objects can extend classes or traits
* - The apply method of an object is usually used for constructing new instances
* of companion class
* - To avoid the main method, use an object that extends the App trait
* - You can implement enumeration by extending the Enumeration object
*
* */


// 6.1 Singletons

/*
* - No static methods or fields (USE object construct)
* - Object defines a single instance of class
* */

object Accounts {
  private var lastNumber = 0
  def newUniqueNumber() = { lastNumber += 1; lastNumber }
}

/*
* - If you require unique a/c number, call Accounts.newUniqueNumber()
* - Constructor of object executed when its first used
* - If an object isn't used, its constructor is not executed
* - An object can have all the features of a class, such as extending classes or traits
* - An object cannot provide constructor parameters
*
* */



/*
*  - Use object if you want a singleton object
*     -  As a home for utility functions or constants
*     -  When a single immutable instance can be shared efficiently
*     -  When a single instance is required to coordinate some service(the singleton design pattern)
*     -  View singleton design pattern with disdain
*     -  Scala provides tools for both good and bad design
* */


// 6.2 Companion Objects

/*
* - Having both instance methods and static methdods can be achieved by
* having a class and a "companion object"
*
* */

object X extends App{
  object Account {
    private var lastNumber = 0
    private def uniqueNumber() = { lastNumber += 1; lastNumber}
  }


  class Account {
    var id = Account.uniqueNumber()
    private var _balance = 0.0
    def deposit(amount: Double) { _balance += amount }

    def balance = _balance
  }

}


var a = new X.Account
a.deposit(100)
a.balance
a.deposit(200)
a.balance

//  Companion object contains features that accompany a class

// 6.3 Objects Extending a Class or Trait

/*
* - An object can extend a class or one or more traits
* - Result is an object of class that extends a given class/traits
* having all the features specified in object definition
*
* */

/*
* - One useful application is to specify default objects that can be shared
*
* Example, Consider a class for undoable actions in a program
* */
abstract class UndoableAction(val description: String) {
  def undo(): Unit
  def redo(): Unit
}

// Useful defaul is the "do nothing" action
object DoNothingAction extends UndoableAction("Do Nothing") {
  override def undo() {}
  override def redo() {}
}

/*
* The 'DoNothingAction' can be shared across all places that needs this default
*
* Open & Save not yet implemented
* */
val actions Map("open" -> DoNothingAction, "save" -> DoNothingAction, ..)


// 6.4 The apply Method

/*
* - Common to have objects with 'apply' method
* - apply method is called for expressions of the form
*  Object(arg1,...argN)
*  - An apply method returns an object of the companion class
*
* */

//  - Array object defines apply methods that allow array creation with expressions
Array("Marry", "Had", "a", "little", "lamb")

// Not having the new keyword is handy for nested expressions
Array(Array(1, 7), Array(2, 9))

/*
*   DIFFERENCE BETWEEN Array(100) and new Array(100)
*
*   - Array(100)
*       -  calls apply(100)
*       -  yields an Array[Int] with a single element, the integer 100
*
*
*   - new Array(100)
*       -  invokes the constructor this(100)
*       -  result is an Array[Nothing] with 100 null elements
* */

var a = Array(100)
a(0) // => res: Int = 100

var b = new Array(100) // => Array(null, null, null, .......)
b(0) // => null

// An example of defining the apply method


object X extends App {
  object Account {
    var lastNumber = 0
    def newUniqueNumber() = {lastNumber += 1; lastNumber}
    def apply(initialBalance: Double) = new Account(newUniqueNumber(), initialBalance)
  }

  class Account private(val id: Int, initialBalance: Double) {
    private var _balance = initialBalance

    def balance = _balance

    def deposit(amount: Double) {
      _balance += amount
    }
  }
}

val acct = X.Account(1000.0)
acct.balance // => res Double = 1000.0
acct.deposit(100)
acct.balance // => 1100.0


// 6.5 Application Objects

/*
* - Every Scala program must start with objects main method of type
*                   Array[String] => Unit:
*
* */

object Hello {
  def main(args: Array[String]) {
    println("Hello, World! ")
  }
}

/*
* Instead of providing main method for your app, you can extend App trait and
* place the program code into the constructor body
*
* */

object Hello extends App {
  println("Hello, World! ")
}

/*
* For command-line arguments, you can get them from args property
* */
object Hello extends App {
  if (args.length > 0)
    println(f"Hello ${args(0)}")
  else
    println("Hello, World!")
}

// 6.6 Enumerations

/*
* - No enumerated types available
* - Standard lib provides Enumeration helper class to produce enumerations
* - Define an object that extends Enumerations class and initialize each value in your
* enumeration with a call to the Value method
* */


/*
* - 3 fields defined Red, Yellow and Green
* - Initialized with a call to Value
* - Each call to the `Value method returns a new instance of an inner calls called `Value
* */
object TrafficLightColor extends Enumeration {
  val Red, Yellow, Green = Value
}


/*
* - IDs, names or both can passed to Value method
* - If ID is not specified, its more than the previous value assigned starting with 0
* - The default name is the field name
* */
object TrafficLightColor extends Enumeration {
  val Red = Value(0, "Stop")
  val Yellow = Value(10) // Name Yellow
  val Green = Value("Go") // ID 11
}

// Referring to enumeration values

TrafficLightColor.Red // => res0: TrafficLightColor.Value = Stop
TrafficLightColor.Yellow // =>  res1: TrafficLightColor.Value = Yellow
TrafficLightColor.Green // => res2: TrafficLightColor.Value = Go

// Or use this if it gets tedious
import TrafficLightColor._

Red // => res0: TrafficLightColor.Value = Stop
Yellow // =>  res1: TrafficLightColor.Value = Yellow
Green // => res2: TrafficLightColor.Value = Go

/*
* - Type of enumeration is TrafficLightColor.Value
* - TrafficLightColor is type of the object holding the values
* */

// You can add type alias to avoid confusion
object TrafficLightColor extends Enumeration {
  type TrafficLightColor = Value
  val Red, Yellow, Green = Value
}

/*
  - Type of enumeration is TrafficLightColor.TrafficLightColor
  - Useful for import statement
*/

import TrafficLightColor._

def doWhat(color: TrafficLightColor) = {
  if (color == Red) "stop"
  else if (color == Yellow) "hurry up"
  else "go"
}

// ID of enumeration 'value' is returned by the id method and its 'name' by the toString method

/*
* TrafficLightColor.value yields a set of all values
* */
for(c <- TrafficLightColor.values) println(s"${c.id}: $c")

TrafficLightColor(0)
TrafficLightColor.withName("Red")
