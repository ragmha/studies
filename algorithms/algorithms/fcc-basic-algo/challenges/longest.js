/*
Find the Longest Word in a String
=====================================================================
- Return the length of the longest word in the provided sentence.

- Your response should be a number.

*/

const findLongestWord = str => str
            .split(' ')
            .reduce( (pre, curr) =>
        Math.max(pre, curr.length)
      ,0);

// Test

findLongestWord("The quick brown fox jumped over the lazy dog") // => 6
findLongestWord("What if we try a super-long word such as otorhinolaryngology") // => 19
