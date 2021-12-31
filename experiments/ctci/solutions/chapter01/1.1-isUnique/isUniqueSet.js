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
