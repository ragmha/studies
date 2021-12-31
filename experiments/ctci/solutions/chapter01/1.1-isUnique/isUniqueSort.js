/**
 * Time: O(n log n)
 * Space: O(1)
 * Sorts the original string converting it to an array and then iterates through. 
 * Returns false if two chracters are same in a row
 */

const isUniqueSort = str => {
  str.split("").sort().join("");

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
};
