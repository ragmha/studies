/*
Largest palindrome product
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/


def isPalindrome(num: Int) = {
    val numString = num.toString()
    numString == numString.reverse
}

var palindromes =
    for(x <- 100 to 999; y <- 100 to 999 if (isPalindrome(x * y)))
    yield x * y

palindromes.max // => res0: Int = 906609
