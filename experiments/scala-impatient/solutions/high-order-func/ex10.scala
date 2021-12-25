/**
* Exercise 10:
*
* Implement an unless control abstraction that works just like if, but with an
* inverted condition. Does the first parameter need to be a call-by-name
* parameter? Do you need currying?
*
**/

def unless(condition: => Boolean)(block: => Unit) {
  if (!condition) block
}

val pos = 10

unless(pos == 9) { println("ok") }
