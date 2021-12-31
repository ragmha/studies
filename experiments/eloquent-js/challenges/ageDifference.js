// Mother-child age difference
const ancestry = require("./ancestry");

const average = array => array.reduce((a, b) => a + b, 0) / array.length;

let byName = {};

ancestry.forEach(person => (byName[person.name] = person));

let difference = ancestry
  .filter(person => byName[person.mother] != null)
  .map(person => person.born - byName[person.mother].born);

console.log(average(difference)); // => 31.2
