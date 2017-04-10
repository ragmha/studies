// 10 Traits

/*
*  - A class can implement any number of traits
*  - Traits can require implementing classes to have certain fields, methods or superclasses
*  - Unlike Java interfaces, a Scala trait can provide implementations of methods and fields
*  - When you layer multiple traits, the order matters- the trait whose methods execute first goes to the back
* */

// 10.2 Traits as Interface

// An unimplemented method in trait becomes abstract
trait Logger {
  def log(msg: String) // abstract method
}

// A subclass can provide an implementation
class ConsoleLogger extends Logger { // Use extends, not implements
  def log(msg:String) { println(msg) } // No override needed
}

/*
* - No special keyword for implementing trait, quite similar to classes than interfaces
* - More than one trait, use the `with` keyword
* - Scala class can have one superclass but any number of traits
* - In Scala, Logger with Cloneable with Serializable is the entity that the class extends
*/

class ConsoleLogger extends Logger with Cloneable with Serializable

// 10.3 Traits with Concrete Implementations

/*
* - Methods of trait doesn't need to be abstract
* - ConsoleLogger provides a method with implementation
*/

trait ConsoleLogger {
  def log(msg:String) { println(msg) }
}

class Account {
    ..
}

class SavingsAccount extends Account with ConsoleLogger {
  def withdraw(amount:Double): Unit = {
    if (amount > balance) log("Insufficient funds")
    else balance -= amount
  }
}

/*
* - SavingAccount picks up concrete implementations from the ConsoleLogger trait
* - Traits can also have state
* - "Consolelogger" is functionally "mixed in" with SavingsAccount class
*
* */


// 11 Operators

/*
* - Identifiers contain either alphanumeric or operator characters
* - Unary and binary operators are method calls
* - Operator precedence depends on the first character, associativity on the last
* - The apply and update methods are called when evaluating expr(args)
* - Extractors extract tuples or sequences of values from an input
* - Types extending the Dynamic trait can inspect the names of methods and arguments at runtime
* */

// 11.1 Identifiers

/*
* - The names of variables, functions, classes and so are collectively called identifiers
* - You can follow sequences of alphanumeric characters, starting with alphabetic characters or underscore such as input1 or next_token
* - Operator characters can be used as an identifiers:
*   - ASCII characters ! # % & * + - / : < = > ? @ \ ^ | ~ , not letters, digits, underscore, punctuation marks
*   - Unicode mathematical symbols or other symbols  ** , √ E.g val √ = scala.math.sqrt_ , you can write √(2) to compute
*   square root
*   - Identifiers  @ # : = _ => <- <: <% >: ⇒ ← are reserved in the specification, and you cannot redefine them.
* -
*
* */
