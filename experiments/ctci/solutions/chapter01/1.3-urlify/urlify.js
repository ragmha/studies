// Urlify

let urlify = (str, length) => {
  let newStr = "";
  for (let i = 0; i < length; i++) {
    if (str[i] === " ") newStr += "%20";
    else newStr += str[i];
  }
  return newStr;
};

console.log(urlify("Mr John Smith ", 13));
