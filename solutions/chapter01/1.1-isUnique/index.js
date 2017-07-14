/**
  * Is Unique
  * Implement an algorithm to determine if a string has all unique characters. 
  */

/**
 * O(n^2) with no data structure
 */
const isUnique = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
};

/**
 * Time: O(n)
 * Space: O(n)
 * Uses Set data structure to keep track of seen characters
 */

const isUniqueSet = str => {
  let chars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
};
