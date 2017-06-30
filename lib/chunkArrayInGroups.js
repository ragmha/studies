/*
Chunky Monkey
=====================================================================
Splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

const chunkArrayInGroups = (arr, size) => {
  let group = [];
  let position = 0;

  while (position < arr.length) {
    group.push(arr.slice(position, (position += size)));
  }
  return group;
};

module.exports = chunkArrayInGroups;
