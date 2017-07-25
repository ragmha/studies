# Overview

## Object-oriented programming

----
## Object
> A repository of data.

## Class
> Type of Object

## Method
> Procedure or function that operates on an object or class

## Inheritance
> A class may inherit properties from a more general class

*   E.g ShoppingList class inherits from List class, it inherits the property of storing a list of things 😉 and also inherits methods.

## Polymorphism
> One method works on several classes, even if the classes need different implementations

*   E.g "addItem" method on every kind of list, even though adding item to a shoppinglist is different from a shoppingCart.

*   **Polymorphism** is what distingues oop from procedural languges such as C,FORTAN,PASCAL,BASIC,etc

## Object-oriented
> Each object knows its own class & methods

*   E.g Each shoppingList and shoppingCart knows which implementation applies to it.

----

## Java

## Variables
> You must **declare** them and their **type**

E.g

```python
// Python
x = 1;
```

```scheme
// Scheme
(let ((x 1)))
```

```java
//Java
int x;
x = 1;

```
## It does 2 things

1.  Allocates memory to store an integer, type **int**
2.  Names variable **x**

Variables are also used to **reference** objects

## 2 ways to get classes:

1.  Use one defined by somebody eles. Java has SE lib
2.  Define your own

E.g
 String myString;
  ^
  |
class built into Java

Can store a reference to a string object

myString `[ ]`   <--variable(not object)

```java
myString = new String();  //String() - constructor signature
// new String() - constructor call
```
## 2 Steps:

1.  "new String()" is a constructor
2.  assignment "=" causes myString to reference the object

myString `[ -]----> [     ] ` a string object

## Java programs must be compiled before you can run them
```
Java program(.java) -[javac]-> .class files -[JVM]-> 🏃
```

## Objects & Constructors
