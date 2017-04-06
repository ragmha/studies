/*
* Chapter 8. Inheritance
*
* - extends and final keywords are similar as Java
* - Use override keyword when overriding a method
* - Only primary constructor can call the primary superclass constructor
* - Overriding fields is possible
* */

// 8.1 Extending a Class
/*
* - Extends similar to Java
* - Specify fields and methods that new to "subclass" or "override" methods in superclass
* - Declare a class "final" so it can't be extended
* - Declare individual "methods" or "fields" final so they can't be "overridden"
* - Final field is immutable, similar to val
*/

class Employee extends Person {
  var salary = 0.0
  ....
}

// 8.2 Overriding Methods

//You must use the "override" modifier when you override a method that isn't abstract
class Person {
    ....
  override def toString = s"${getClass.getName}[name=$name]"
}

/*
* - override modifier can give useful error messages in a number of common situation such as:
*    -  When you misspell the name of the method you are overriding
*    -  When you accidentally provide a wrong parameter type in the overriding method
*    -  When you introduce a new method in a superclass that clashes with a subclass method
* */


/* ## CHECK THIS MORE LATER
* Fragile base class problem
*
* - Change in superclass cannot be verified without looking at all subclasses
Suppose programmer Alice defines a Person class, and, unbeknownst to Alice, programmer Bob defines a subclass Student
with a method id yielding the student ID. Later, Alice also defines a method id that holds the person’s national ID.
When Bob picks up that change, something may break in Bob’s program (but not in Alice’s test cases) since Student
objects now return unexpected IDs.
*
* - Solved in java by declaring all methods as final unless explicitly designed to overridden
* - Reason behind an option @Overrides annotation
* */


/*
** - Invoke a superclass method in Scala using `super`
*
* - super.toString invokes the toString method of superclass, i.e `Person.toString method
**/
class Employee extends Person {
    ..
  override def toString = s"${super.toString}[salary=$salary]"
}

// 8.3 Type Checks and Casts

class Person {

}

class Employee extends Person {

}

var p = new Person

/*
* - To test an object belongs to a given class, use "isInstanceOf" method
*
* - If the above test succeeds, "asInstanceOf" method to convert
* a reference to a subclass reference
* */
if(p.isInstanceOf[Employee]) {
  val s = p.asInstanceOf[Employee] // s has a type Employee
}

/*
* - p.isInstanceOf[Employee] test succeeds if p refers to an object of class Employee or its
* subclass(such as Manager)
*
* - If p is null, then p.isInstanceOf[Employee] returns false and p.asInstanceOf[Employee] returns null
*
* - If p is not an Employee, then p.asInstanceOf[Employee] throws an exception
*
* */

// Testing whether p refers to an Employee object but not a subclass
if (p.getClass == classOf[Employee]){

}

// Scala VS type checks and casts
/*
*   obj.isInstanceOf[Cl] (Scala)    <===>   obj instanceof Cl  (Java)
*   obj.asInstanceOf[Cl] (Scala]    <===>   (Cl) obj           (Java)
*   classOf[Cl]          (Scala)    <===>   Cl.class           (Java)
*
* */

// Pattern matching is always better than type checks and casts
p match {
  case s:Employee =>   .... // Process s as an Employee
  case _ =>   ... // p wasn't an Employee
}

// 8.4 Protected Fields and Methods

/*
*   - Declaring a field or method "protected", can be accessible
*   from any subclass but not any other location
*
*   - A protected member is not visible through the package to which the class belongs
*
*   - Use protected[this] variant to restrict access to the current object, similiar to
*   private[this] variant
* */


// 8.5 Superclass Construction

/*
* - A class has one primary constructor and many auxiliary constructor
*
* - Auxiliary constructor must start to call to a preceding auxiliary constructor/primary constructor
*
* - An auxiliary constructor can never invoke a superclass constructor directly
*
* - Auxiliary constructor of subclass eventually call the primary constructor of the subclass,
* Only the primary constructor can call a superclass constructor
*
* */


// Primary constructor is intertwined with class definition, the call to superclass constructor is similarly intertwined
class Employee(name: String, age: Int, val salary: Double) extends Person(name, age)

/*
* - This defines a subclass & a primary constructor that calls the superclass constructor
*
* - Intertwining the class and the constructor makes a very concise code
* - Primary constructor params as params of the class
* - Employee class above has 3 params (name, age, salary), 2 of which it "passes" to the superclass
* - No use of super(params)
* */

// Scala class extending a Java class, It's primary constructor must invoke one of the constructors of the Java superclass
class PathWriter(p: Path, cs: Charset) extends java.io.PrintWriter(Files.newBufferedWriter(p, cs))

// 8.6 Overriding Fields
/*
*
* - Scala consists of a private field and accessor/mutator methods
* - You can override a val(or a parameterless def) with another val field of the same name
*
* - Subclass has a private field and a public getter, the getter overrides the superclass getter(or method)
* */

class Person(val name: String) {
  override def toString = s"${getClass.getName}[name=$name]"
}

class SecretAgent(codename: String) extends Person(codename) {
  override val name = "secret" // not revealing name
  override val toString = "secret"  // or class name
}


// Common case is to override an abstract def with a val
abstract class Person {
  def id: Int // Each person has a ID that is computed in some way
}

class Student(override val id : Int) extends Person // Student ID is provided in the constructor

/*
* - Following Restriction
*
* - A def can only override another def
*
* - A val can only override another val or a parameterless def
*
* - A var can only override an abstract var
*
* */

/*
*                                           Override val
*
*   - Subclass has private field (with same name as the superclass field - that's Ok)   (with val)
*   - Error                                                                             (with def)
*   - Error                                                                             (with var)
*
*
*                                           Override def
*
*   - Subclass has a private field                                                      (with val)
*   - Getter overrides the superclass method                                            (with val)
*
*   - Similar to Java                                                                   (with def)
*   - A var can override getter/setter pair.Overriding just getter is an error          (with var)
*
*
*                                          Override var
*   - Error                                                                             (with val)
*   - Error                                                                             (with def)
*   - Only if the superclass var is abstract                                            (with var)
* */

// Using a var in base class and extending it latter cannot override var with getter/setter pair

// 8.7 Anonymous Subclasses

// An instance of anonymous subclass if you include a block with definitions or overrides

class Person(val name: String){}

val alien = new Person("Fred") {
  def greeting = "Greetings, Earthlin! My Name is Fred"
}

// This creates an object of structural type, the type is denoted as Person{def greeting: String}

// Using the type
def meet(p: Person{def greeting: String}): Unit = {
  println(s"${p.name} says: ${p.greeting}")
}

// 8.8 Abstract Classes

/*
* - Using "abstract" keyword, it denotes a class cannot be instantiated
* Because one or more of it's methods are not defined
*
*
* Person abstract class
* - Every person has an ID, but we don't know how to compute it
* - Each subclass of a Person needs to specify an id method
* - "abstract" keyword not used for an abstract method
 * - "override" keyword not used when abstract is defined in the superclass
* */

abstract class Person(val name: String) {
  def id: Int // No method body- this is an abstract method
}


class Employee(name: String) extends Person(name) {
  def id = name.hashCode // override keyword not required
}

// 8.9 Abstract Fields
/*
* - A class can also have abstract fields
* - An abstract field is simply a field without an initial value
* */

abstract class Person {
  val id: Int // No initializer- this is an abstract field with an abstract getter method
  var name: String // Another abstract field, with abstract getter and setter method
}

// Person class defines an abstract getter for id and name fields  and an abstract setter for the name field.

// Concrete subclasses must provide concrete fields
class Employee(val id: Int) extends Person { // Subclass has concrete id property
  var name = "" // and concrete name property
}

// No override keyword required in subclass when a field is defined in the abstract superclass

// Customizing an abstract field using anonymous type:
val fred = new Person {
  val id = 1234
  var name = "Fred"
}

// 8.10 Construction Order and Early Definition

/*
* - Overriding a val in subclass and using the value in superclass constructor, the resulting behaviour is unintuitive
* */

// Default creature can see 10 units ahead
class Creature {
  val range: Int = 10
  val env: Array[Int] = new Array[Int](range)
}

// Ants however are near sighted
class Ant extends Creature {
  override val range = 2
}

var a = new Ant
a.range

/*
*   This results into a problem
*   The range value used in superclass constructor and the superclass constructor runs
*   before subclass constructor
*
*   1) Ant constructor calls the Creature constructor before it's own construction
*   2) Creature constructor sets its range field to 10
*   3) Creature constructor, in order to initialize the env array, calls the range() getter
*   4) The method is overridden to yield the(as yet uninitialized) range field of Ant class
*   5) The range method returns 0 (That is the initial value of the integer fields when an object is allocated
*   6) env is set to an array of length 0
*   7) The Ant constructor continues, setting its range field to 2
*
*
*   - It appears if range is either 10 or 2, env has been set to an array length 0
*   - Don't rely on the value of a val in the body of a constructor
* */

/*
 * To fix the above issue
 *
 *  - Declare the val as final. This is safe but not very flexible
 *  - Declare the val as lazy in the superclass. This is safe but a bit inefficient
 *  - Use "early definition syntax" in subclass
 *
 *  - "Early Definition syntax" lets you initialize val fields of subclass before the superclass is executed.
 **/

/*
**  "with" keyword before superclass is used with "traits"
*    Right hand side of an early definition can only refer to previous early definitions,
*    not other fields or methods of class
 */
class Ant2 extends { override val range = 2 } with Creature

var a2 = new Ant2
a2.range

// 8.11 Scala Inhertiance Hierarchy

/*
*  - Classes that correspond to the primitive types in Java as the type "Unit", extend "AnyVal"
*
*  - Subtype of all types "Nothing <<trait>>"
*  - Subtype of all reference types "Null <<trait>>"
*
*  - All other classes are subclasses of the "AnyRef" class
*
*  - Both "AnyVal" and "AnyRef" extend "Any" class, the root of hierarchy
*
*  - "Any" class defines methods "isInstanceOf", "asInstanceOf", methods of "equality","hash codes"
*  - "AnyVal" does not add any methods, its just a marker for value types
*
*  - "AnyRef" class adds monitor methods "wait" and "notify/notifyAll" from "Object" class
*  - Provides a "synchronized" method with function params
*
*  - All Scala classes implement the marker interface "ScalaObject", which as no methods
*  - End of hierarchy are the "Nothing" and "Null" types
*
*  - "Null" is the type whose sole instance is the value "null"
*  - You can assign "null" to any reference but not one of the value types
*  E.g setting an Int to null is not possible
*
*  - "Nothing" type has no instances, useful for generic constructs
*  - Empty list "Nil" has type "List[Nothing]", which is a subtype of List[T] for any T
*
*  - "???" method is declared with a return type "Nothing", It never returns but instead throwse a
*  "NotImplementedError" when invoked.
* */

// "???" method can be used for methods such as
class Person(val name: String) {
  def description = ???
}

/*
* Person class compiles since "Nothing" is a subtype of every type
* - You can use the above class as long as you don't call the description method
*
*
* - Nothing type is not similar to void
* - void is represented as Unit type
* - Unit is not supertpe of any other type
* */
def printAny(x: Any){ println(x) }
def printUnit(x: Unit){ println(x) }

printAny("Hello")

printUnit("Hello") // Replaces "Hello" with "()", calls printUnit(()), thus prints ()


/*
* - Method has params of type "Any" or "AnyRef", its called with multiple arguments, then are placed in a tuple
* */
def show(o: Any) { println(s"${o.getClass}: $o")}
show(3) // Prints class java.lang.Integer: 3
show(3, 4, 5) // Prints class scala.Tuple3: (3, 4, 5)
show() // no params, a Unit value is passed, this behaviour is depreciated

// 8.12 Object Equality

/*
* - the eq method of the AnyRef class checks whether 2 references refer to the same object
* - The "equals" method in AnyRef calls "eq"
* - Consider overriding "equals" method to provide a natural notion of equality
* */

/*
E.g A class Item, you might want 2 items to be equal if they have same description and price

 */
class Item(val description: String, val price: Double){

  // Using an equals method
  final override def equals1(other: Any) = {
    other.isInstanceOf[Item] && {
      val that = other.asInstanceOf[Item]
      description == that.description && price == that.price
    }
  }

  // Better to use patten matching
  final override def equals(other: Any) = other match {
    case that:Item => description == that.description && price == that.price
    case _ => false
  }

  // Item example, combine hashcodes of the fields
 final override  def hashCode = (description, price).##
}

/*
* - Equal method is defined as "final" because it generally becomes difficult to correctly
* extend equality in subclass
*
* - Problem is symmetry
* - you want a.equals(b) to beave the same as b.equals(a), even if b belongs to subclass
*
* - Make sure you define the equals method with params type "Any"
*
* - When you define equals, also remember to define hashCode as well
*
* - Hashcode should be computed only from fields that is used in equality check, so equal objects have the
* same hash code
* */


/*
* - The "##" method is null-safe version of the hashCode method that yields 0 for null instead of
* throwing an exception
*
* - Don't be complled to override equals and hashCode
* - For classes consider distinct objects unequal
* - In Application program, you don't call eq or equals, Simply use "==" operator
* - For reference types, it calls equals after doing appropriate chceks for null operands
* */

// 8.13 Value Classes

/*
* - Some classes have single Fields, such as wrapper classes for primitive types
* , the "rich" or "ops" wrapper Scala uses to add methods to existing types
*
* - Inefficient to allocate a new object that holds one value
*
* - "Value classes" allow you to define classes that are "inlined" so that single field is used directly
* */

/*
*       VALUE CLASS HAS 3 PROPERTIES
*
*       1) The class extends AnyVal
*       2) Its primary constructor has exactly one parameter, which is a val and no body
*       3) The class has no other fields or constructors
*       4) The automatically provided equals and hashCode methods compare and has the underlying value
* */

// Example: Defining a value class that wraps "Military time" value:
class MilTime(val time: Int) extends AnyVal {
  def minutes = time % 100
  def hours = time / 100
  override def toString = f"$time"
}
// You can invoke minutes and hours methods on the value but not Int methods
var lunch = new MilTime(1230)
println(lunch.hours) // OK
println(lunch * 2) // Error


// For proper initialization, make primary constructor private and provide a factory method in companion object

class MilTime private(val time: Int) extends AnyVal

object MilTime {
  def apply(t: Int): Unit = {
    if (0 <= t && t < 2400 && t % 100 < 60) new MilTime(t)
    else throw new IllegalArgumentException
  }
}

/*
 *        A value class can only have one field
 *    - For a value class to implement a trait, the trait must explicitly extend "Any"
 *    it may not have fields
 *    - Such Traits are called "Universal traits"
 *
 */


/*
*   - Value types were designed to make implicit conversions efficient
*   - Can be used as overhead-free "tiny types"
* */

// Instead of this
class Book(val author: String, val title: String)

// Wrap each string value to a seperate value class such as "Author" and "Title"

// During Class Definition, programmers who construct Books can't accidently switch author and title
class Book(val author: Author, val title: Title)
