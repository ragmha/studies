7. What do you need to import so that you can get a random prime as probablePrime(100, Random), without any qualifiers before probablePrime and Random?

> We need to import `Random` from the `util` library and companion object `probablePrime` from `math` library

```scala
import scala.util.Random;
import scala.math.BigInt.probablePrime;

probablePrime(100, Random)
// res0: scala.math.BigInt = 808782251177535630610098676657
```
