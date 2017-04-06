/**
  * Created by raghib on 3/25/17.
  */
import scala.math._
import BigInt.probablePrime
import util.Random

object theBasics {
    //   2
    println(3 - pow(sqrt(3), 2)) // => res0: Double = 4.440892098500626E-16


    // 4
    "crazy" * 3 // res1: String = crazycrazycrazy

    // 5
    10 max 2 // => 10

    // 6
    BigInt(2) pow 1024 // res0: scala.math.BigInt = 179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085”005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216

    // 7
    probablePrime(100, Random) // res0: scala.math.BigInt = 808782251177535630610098676657

    // 8
    probablePrime(100, Random).toString(36) // res0: String = 241jrkd98jwy9pp4n4az

    // 9
    val s = "Hello"

    s.head  // res0: Char = H

    s(0)    // res1: Char = H

    s.last     // res2: Char = o

    s(s.length()-1)  // res3: Char = o


    // 10
    s take 2    // res0: String = He

    s drop 2   // res0: String = llo

    s takeRight 2 // res0: String = lo

    s drop 2   //res0: String = Hel
}
