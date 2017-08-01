# CLASS NOTES

# Types and methods
* You can use infix in scala
Eg "Hello" intersect "World"

* StringOps class , implicit conversion ??? String -> StringOps the compiler does?

* Implicit conversion for BigInt as well

# Flashback from the future

* scala.AnyVal - any value classes
* scala.AnyRef - any VALUE OBJECTS
* scala.Nothing - subtype of everything

# Calling methods and apply

* `_` is a wild card
*  "Hello"(4) - calls apply method
*  you can pass a predicate

# If

* if has a value
* if it returns different value then its `Any`

# I/O
* formatted printed available
* String interpolation

# Loops
* 1 to n , infix notation 1.to(n)
* `<-` in

# Advanced for
* seperate **generators** with `;`
* `from`
* check lazy evaluation

# Functions
* def , no return keyword needed
* | for multiple lines
* `=` removing this is just a function definitation
* return type of functions
* Check ternary operator
* Check `tail-call` for optimizing recursion

# Functions- contin.
* named variables possible
* default values
* variable number of arguments, args:Int*

# Lazy values
* `lazy`, operation is not executed unless it's accessed

# Exception
* type of nothing is nothing, throw an exception and use try and catch

# Array and ArrayBuffer
* use `()` instead of `[]`
* if you want mutable ds, import them seperately
* use `++=` for Collection , `+=` for values

# Iterating over arrays
*  `until`- similar to for(i=0; i< untilval)

# Iterating over array elements
* `yield` for new collections, collections are not mutated
* use `guard` while iterating, e.g (if elem % 2 == 0)
* Check java8 or 9 or POJO

# Array utilities
* `mkString`

# Map
* Collection of key value pairs
* Immutable by default
* Assiging keys to value using `->`

# Access a map
* `.get()`- returns an Option value, Some/None, you either get a value or nothing
*  `withDefaultValues` - you can apply default values if it doesn't exist

# Update a map
* Check later (ASK)

# Iterate, sort a map
* iterate using for loops

# Tuples and zip
* tuples - having different values
* val (first, second, _) = t - Destructuring assingment
* `.zip` - pairing 2 arays based on their indices
* Map contains tuples

============================================================

# Class
* `public` keyword is not needed
* default setter and getter automatically generated both for instance variables (private/public)
*  For val it's only getter, but for var it's both `setter` and `getter`
*  value must be initialised
* no `=` sign, so it's a Unit (procedure)
## Conventions of parenthesis on mutation and non-mutation
* `()` is a mutating method(convention)
*  Without `()` is a non-mutating method
* for Constructor, no constructor parameters

# Getter and setter
* Conventions
  * For getter it's _getterName
  * For setter its age_=
* not possible to override automatically generated getter and setter
*  `p.age_=(66)` is equivalient `p.age = 67`
* setter and getter is called property, field is instance variables
* Defining field var, getter and setter are generated
* Defining field val, getter is generated
* Defining methods age and age_=, read/write property
* Defining method, is read-only property
* Private field, getter and setter are private
* Default (public) field, getter and setter are public

## Primary constructor
* Defining class and primary Constructor at the same line with default values.
* When constructor is created and executed, Function definition will not be run
* Constructor params without val/var becomes a `private[this]` object-private field.

## Auxilary constructors
*  `override` keyword instead of annotation
*  it must call the earlier constructor(primary), auxilary constructor

## Objects and companion and apply method
* single instance created for `object`
* noraml class
* you can call `companion object`
, within the same file
* value of the last element in the block is the result
* `new` keyword not required for creating instance, because the `apply` method is applied already in the `companion object`
* singleton pattern - having only one instance defined in the companion object
* Similar to `statics` in Java

## App object
* Starting point of application is the main method
  * `def main(args)`
* Extending App trait(enhanced Java interface), `no def main(args)`

## Enumeration
* Adding some restrict over Map

---
## Extends and overriding methods
* `super`, to call superclass
* Class `final`, means it can't be extended
* `final` cant be over overriden
* `protected` visible in any subclass

## Type checking & casting
* `isInstanceOf`- part of the inheritance tree of the given class
* ??? check isinstance of in Java
* `LSP` ??? , E.g A is subtype of B -> A can be used whenever B is used
* `Matching is always better`, use `_:`, for not using the value, `_`
* More powerful than `Switch case`

## Superclass construction
* Only the primary constructor in class, calls a superclass constructor
* Calling the `superclass` withing the method defination with `primary constructor`

## Override fields
* `Overriding` the base class field with super
* `abstract` means you can't create an instance of the class
* `def id: Int`, no initializer

## Abstract classes & fields
* `Field` has no initializer
* When extending, must provide concret
* Check if it's initialized???

## Construction order `??????` confusing 🤔
* `Overriden getter` when extended by subclass
* When called range, initialzed to 0
* Declare as `final` and `lazy`
* Calls the base class constructor before superclass is called

## Object equality
* `Override` the `equals`, `hashCode`
* Metion the fields being equaled when overriding the `hashCode`
* type is `Any`
* `_`, anything else
* `override  =`, make them `final`
* `.##`, creates a tuple with the specified field returns an `Int`

## Value classes `??????` check more 🤔
* extends `AnyVal` and `encapsulates` a single val

## Inheritance
* Can be done with `trait` and `with`

## Object with trait, trait as type
* Using trait as type names
* Works similar to Java interfaces as types
* Cannot assign to a wrong type, if it doesn't have a trait such as di: Pet = new Giraffe , a method cannot be called

## Stacking traits
* Mixing multiple traits in order
* stacked from right to left

## Fields in traits
* `concrete field` in Traits
* if no value, field is `abstract`, it needs to be `overriden`

## Trait construction
* No constructor parameters
* have parameterless default constructor
* Construction is done `left-to-right`, Execution happens `right-to-left`
* parent `traits` are called only once

## Match
* Always returns a value
* Matches any value
* No `Fall through`, break is not needed
* Match can throw an exception
* can have similar case with guards

## Match with variables in patterns
* value assigned to the matched expression

## Types in patterns
`: type`

## Case classes
* `paramaters` become `vals`
* Companion object `apply` and `unapply` is generated automatically
* `toString`, `copy`, `equals`, `hashCode`
* using object, it has only one instance of that object of the abstract class
