const { resolve } = require('path');
const { readFileSync } = require('fs');

const { part1, part2 } = require('./solution');

const i = readFileSync(resolve(__dirname, './input.txt'), 'utf8');

console.log('Day 2');
console.log(`Part 1: ${part1(i)}`);
console.log(`Part 2: ${part2(i)}`);
