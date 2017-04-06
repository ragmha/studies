8.One way to create random file or directory names is to produce a random BigInt and convert it to base 36, yielding a string such as "qsnvbevtomcj38o06kul". Poke around Scaladoc to find a way of doing this in Scala.

> `toString(radix)` - Returns the String representation in the specified radix(meaning root, refers to base) of this BigInt.

```scala
import scala.util.Random;
import scala.math.BigInt.probablePrime;


probablePrime(100, Random).toString(36) // res0: String = 241jrkd98jwy9pp4n4az
```
