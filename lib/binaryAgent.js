/*
Binary Agents
===============================================================================

- Returns an English translated sentence of the passed binary string.

- The binary string will be space separated.

*/

const binaryAgent = str =>
  String.fromCharCode(...str.split(" ").map(char => parseInt(char, 2)));

module.exports = binaryAgent;
