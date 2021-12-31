// Historical life expectancy
const ancestry = require("./ancestry");

const average = array => array.reduce((a, b) => a + b, 0) / array.length;

const groupBy = (array, groupOf) => {
  let groups = {};
  array.forEach(element => {
    let groupName = groupOf(element);
    if (groupName in groups) groups[groupName].push(element);
    else groups[groupName] = [element];
  });
  return groups;
};

const byCentury = groupBy(ancestry, person => Math.ceil(person.died / 100));

for (let century in byCentury) {
  let ages = byCentury[century].map(person => person.died - person.born);
  console.log(`${century} : ${average(ages)}`);
}
