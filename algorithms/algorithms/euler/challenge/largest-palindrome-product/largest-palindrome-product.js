/*
Largest palindrome product
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = num =>
    num === num.toString().split('').reverse().join('') * 1


const Lpalindrome = dig => {
    let palindromes = [];

    let start = Math.pow(10, dig) -1;
    const limit = Math.pow(10, dig -1);

    for(let i = start; i >= limit; i--) {
        for(let j = start; j >= limit; j--) {
            let prod = i * j
            if(isPalindrome(prod)) palindromes.push(prod)
        }
    }
    return Math.max.apply(null, palindromes);
}

Lpalindrome(3) // => 906609
