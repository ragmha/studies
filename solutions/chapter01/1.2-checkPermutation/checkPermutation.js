// Check Permuation

let sortString = str => str.split("").sort().join("");

let checkPermuation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  else {
    let str1sorted = sortString(str1);
    let str2sorted = sortString(str2);

    return str1sorted === str2sorted;
  }
};

checkPermuation("aba", "aab"); // => true
checkPermuation("aba", "aaba"); // => false
checkPermuation("aba", "aa"); // => false
