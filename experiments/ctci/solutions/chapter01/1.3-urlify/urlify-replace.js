const urlify = str => (str ? str.replace(/\s/g, "%20") : str);

console.log(urlify("Mr John Smith ", 13));
