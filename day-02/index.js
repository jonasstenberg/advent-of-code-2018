const { part1, part2 } = require('./solution');
const readInput = require('../utils/read-input');

const input = readInput('./day-02/input.txt');

console.log('Day 2');
console.log(`Part 1: ${part1(input)}`);
console.log(`Part 2: ${part2(input)}`);
