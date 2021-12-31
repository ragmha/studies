const urlify = str => (str ? str.split(" ").join("%20") : str);

console.log(urlify("Mr John Smith ", 13));
