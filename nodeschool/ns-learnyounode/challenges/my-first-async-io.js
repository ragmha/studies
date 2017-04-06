// MY FIRST ASYNC I/0!

const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, (err, contents) => {
  if (err) return console.log(err);
  let lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});
