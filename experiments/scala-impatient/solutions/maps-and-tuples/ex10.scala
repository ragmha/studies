/**
* Exercise 10:
*
* What happens when you zip together two strings, such as "Hello".zip("World")?
* Come up with a plausible use case.
*
**/

// Zipping Hello with World
"Hello".zip("World")
// => Vector(('H', 'W'), ('e', 'o'), ('l', 'r'), ('l', 'l'), ('o', 'd')): collection.immutable.IndexedSeq[(Char, Char)]

// Plausible use cases

//1) Difference between 2 strings
"Hello World"
 .zip("hello world!")
/* => Vector(
 ('H', 'h'),
 ('e', 'e'),
 ('l', 'l'),
 ('l', 'l'),
 ('o', 'o'),
 (' ', ' '),
 ('W', 'w'),
 ('o', 'o'),
 ('r', 'r'),
 ('l', 'l'),
 ('d', 'd')
): collection.immutable.IndexedSeq[(Char, Char)] */

"Hello World"
 .zip("hello world!")
 .filter(c => c._1 != c._2)
// => Vector(('H', 'h'), ('W', 'w')): collection.immutable.IndexedSeq[(Char, Char)]

// 2) Adding Encryption

"Hello World"
 .zip("MD5SDIAASINFINDAIFNSIDGNIOSNGNSDG")

 // 3) Etc...(Later will add more ;) )
