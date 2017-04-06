/*
  Largest prime factor
  Problem 3

  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?

  E.g Prime factors of 132
    132 = 2 * 66
    66  = 2 * 33
    33  = 3 * 11
    11 = PRIME NUMBER
    factors(132) = 2, 2, 3, 11
*/

fn main() {
    let mut n = 600851475143_i64;
    let mut f = 2_i64;

    while f * f <= n {
        if n % f == 0 {
            n = n / f;
        }else {
            f = f + 1;
        }
    }

    println!("Max: {:?}", n);
}
