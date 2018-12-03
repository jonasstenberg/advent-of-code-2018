const { part1, part2 } = require('./solution');
const readInput = require('../utils/read-input');

const input = readInput('./day-03/input.txt');

console.log('Day 3');
console.log(`Part 1: ${part1(input)}`);
console.log(`Part 2: ${part2(input)}`);
