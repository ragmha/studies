//5.1 Simple Classes and Parameterless Methods

class Counter {
  private var value = 0
  def increment() { value += 1}
  def current = value
}

val myCounter = new Counter
myCounter.increment()
println(myCounter.current) // can call without parentheses

myCounter.increment() // Use () for mutator (a method that changes the object state)
myCounter.current // Drop () for accessor ( a method that doesn't change the object state)


// 5.2 Properties with Getters and Setters

/*
*  For private field - getter and setter methods are private
*  For public field - getter and setter methods are public
*
*  In Scala E.g age
*
*  getter - age
*  setter - age_=
* */

var fred = new Person1()
println(fred.age) // Calls the method fred.age() // => 0
fred.age = 21     // Calls fred.age_= 21
println(fred.age) // => 21


class Person2 {
  private var privateAge = 0

  def age = privateAge

  def age_= (newValue: Int) = {
    if (newValue > privateAge) privateAge = newValue
  }

}

var bob = new Person2()
println(bob.age)
bob.age = 30
bob.age = 21
println(bob.age) // => 30

/*
*  - If field is private, the getter and setter are private.
*  - If field is a val, only getter is generated.
*  - If you don't want any getter/setter, declare the field as `private[this]`
* */

// 5.3 Properties with Only Getters

/*
* - If value of property never changes after object construction, use `val`
* - Scala compiler produces a Java class with a private final field and a public getter method with no setter
*
* */
class Message {
  val timeStamp = java.time.Instant.now
}

// Instead of val, since we cant change use a private var field and a property getter

class Counter {
  private var value = 0
  def increment() { value += 1 }
  def current = value
}

var myCounter = new Counter
myCounter.current
myCounter.increment()
myCounter.current

/*
* Implementing properties summary
*
* 1) var foo: Scala synthesizes a getter and setter
* 2) val foo: Scala synthesizes a getter
* 3) define methods foo and foo_=
* 4) define method foo
* */

// There is no write-only property(no getter only setter) in scala

/*
*   private field together with getter for `val` field
*   public field with getter and setter for `var` field
*
* */

// 5.4 Object-Private Fields

// Method can access the private fields of all objects of its class

class Counter {
  private var value = 0
  def increment() { value += 1 }
  def isLess(other: Counter): Unit = {
    value < other.value
  } // Can access private field of other object
}

// Accessing ohter.value is LEGAL because other is also a Counter object

// Severe access restriction with the private[†his] qualifier
private[this] var value = 0

/* - Methods of the Counter class can only access the `value`field of the current object,
*  - Other objects of type Counter  cannot access
*  - This is sometimes called object-private
*  - Class-private field, Scala generates a private getter and setter methods
*  - Object-private field - no getters and setters are generated
*  - private[ClassName] states that only method of the given class can access the given field.
*  - ClassName must be the name of the class being defined or enclosing class
*/

// 5.5 Bean Properties

/*
**
val/var name (Scala Field)
--> public name  name_=(var only) (Generated methods)
--> To implement a property that is publicly accessible and backed by a field (Usage)
**
**
@BeanProperty val/var name (Scala Field)
--> public name getName() name_=(var only) setName(...) (var only) (Generated methods)
--> To interpolate with JavaBeans (Usage)
**
**
private val/var name (Scala Field)
--> private name  name_=(var only)( Generated methods)
--> To confine the field to the methods of the class, similar to Java.
Use private unless you really want a public property (Usage)
**
**
private[†his] val/var name (Scala Field)
--> none ( Generated methods)
--> To confine the field to the methods invoked on the same object.
 Not commonly used (Usage)
**
**
private[ClassName] val/var name (Scala Field)
--> implementation-dependent ( Generated methods)
--> To grant access to an enclosing class. Not commonly used (Usage)
**
**
*/

// To get a JavaBean getters and setters on a primary constructor parameter, annotet it
class Person(@BeanProperty var name: String)


// 5.6 Auxiliary Constructors

/*
*  - Scala class can have many constructors as you like
*  - Scala has a primary constructor and any number of auxiliary constructors
*
*  - Auxiliary constructors are called `this`
*  - Each auxiliary constructor must start with a call to a previously defined auxiliary
*  constructor or the primary constructor.
* */

// A class with 2 auxiliary constructors

class Person {
  private var name = ""
  private var age = 0

  // An auxiliary constructor
  def this(name: String) {
    this() // Calls the primary constructor
    this.name = name
  }

  // Another auxiliary constructor
  def this(name: String, age: Int) {
    this(name) // Calls the previous auxiliary constructor
    this.age = age
  }
}

// Class which we don't define a primary constructor has a primary constructor with no arguments

val p1 = new Person // Primary constructor
val p2 = new Person("Fred") // First auxiliary constructor
val p3 = new Person("Fred", 42) // Second auxiliary constructor

// 5.7 The Primary Constructor

/*
* - Every class has a primary constructor
* - Primary constructor not defined with `this` method, interwoven with class definition
* */


/*
* 1)Parameter of primary constructor turn into fields and are initialized with
* constructor parameter
*  - name and age become fields of the Person class
*  - Constructor calls such as new Person("Fred", 42) // sets name and age field
* */


// Parameters of primary constructor are placed immediately after the class name
class Person(val name: String, val age: Int) {

}


/*
* 2) Primary constructor executes all statements in class definition
* - println statement is a part of primary constructor,
* executed when an object is constructed
*/

class Person(val name: String, val age: Int) {
  println("Just constructed another person")
  def description = s"$name is $age years old"
}

//  Useful to configure a field during construction
class myProg {
  private val props = new Properties
  props.load(new FileReader("myprog.properties"))
  // The statement is a part of primary constructor
}

/*
- If there are no parameters after class name, then class has a primary constructor
with no parameters
- Constructor simply executes all statements in the body of the class
 */

// Elimination of auxilary constructors using default arguments in primary constrcutor
class Person(val name: String = "", val age: Int = 0)

// Primary constructor can have any of the forms
class Person(val name: String, private var age: Int)
// declares and initializes field
val name: String
private var age: Int

/* Construction parameters can be regular method parameters without val or var
- If param without val or var is used inside at least one method, it becomes field
 */
class Person(name: String, age: Int) {
  def description = s"$name is $age years old"
}

/* Declares and initilizes immutable fields name and age that are object private
* Such fields is equivalent of `private[†his] val`
* Otherwise the params are not saves as field
*/

/*
*
*
- name: String (Primary Constructor Parameter)
=> object-private field, or no field if no method uses name (Generated field/methods)
*
*
- private val/var name: String (Primary Constructor Parameter)
=> private field, private getter/ setter (Generated field/methods)
*
*
-  val/var name: String (Primary Constructor Parameter)
=> private field, public getter/ setter (Generated field/methods)
*
*
- @BeanProperty val/var name: String (Primary Constructor Parameter)
=> private field, public Scala and JavaBeans getter/ setter (Generated field/methods)
*
*
*/

/* Using parameters without val or var, scope of such parameter is entire class
* Can be used as parameters in methods, compiler saves it as a field
**/

class Person(val name: String) {
  var age = 0
  def description = s"$name is $age years old"
}

/*
*  In  class definition
* 1) Takes the definition apart
* 2) Takes the constructor definition
* */

// To make primary constructor private, use `private` keyword
class Person private(val id: Int) {...}

/*
* The class user must use an auxiliary constructor to construct Person object
* */

import scala.collection.mutable.ArrayBuffer
// 5.8 Nested Classes

/*
* In Scala its possible to:
* - Define function inside other function
* - Define classes inside other classes
* */



// 5.8 Nested Classes

/*
* In Scala its possible to:
* - Define function inside other function
* - Define classes inside other classes
* */

import scala.collection.mutable.ArrayBuffer;


class Network {
  class Member(val name: String) {
    var contacts = new ArrayBuffer[Member]
  }

  private val _members = new ArrayBuffer[Member]

  def join(name: String) = {
    val m = new Member(name)
    _members += m
    m
  }


  override def toString = {
    s"Contacts in Network ${_members}"
  }
}

val chatter = new Network
val myFace = new Network


val fred = chatter.join("Fred")
val wilma = chatter.join("Wilma")
fred.contacts += wilma
val barney = myFace.join("Barney") // Has type myFace.Member
fred.contacts += barney // can't add myFace.Member to a buffer of chatter.Member elemenets

/*
* ANOTHER SOLUTION IS
* - Move the Member type somewhere else, Creating a Network companion object
*
* */

object Network {
  class Member(val name: String) {
    val contacts = new ArrayBuffer[Member]
  }
}


class Network {
  private val members = new ArrayBuffer[Network.Member]()
}


/*
* Alternatively we can use a type projection Network#Member
* - Meaning "a Member of any Network"
*
* - This is done for a fine-grained "inner class per object"
*
* - RELEATED TO TYPE PROJECTION
* */

class Network {
  private val members = new ArrayBuffer[Network#Member]()
}

/*
* - In Nested class, you can acess `this` reference
* of this enclosing class as EnclosingClass.this
*
*  - Below uses an alias for referencing outer
* */

class Network (val name: String) {
  outer =>
  class Member(val name: String) {
    def description = s"$name inside ${outer.name}"
  }
}

/*
* class Network { outer => synatax
* - variable outer refer to  Network.this
* - self is common and confusing with nested class
*
* - More info in the self-type syntax
* */
