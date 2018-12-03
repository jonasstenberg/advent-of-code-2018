import test from 'ava';

import readInput from '../utils/read-input';
import { part1, part2 } from '.';

test('Day 3, Part 1', (t) => {
  const input = readInput('./day-03/input.txt');

  t.is(part1(input), 104439);
});

test('Day 3, Part 2', (t) => {
  const input = readInput('./day-03/input.txt');

  t.is(part2(input), '#701');
});

test('find overlapping', (t) => {
  const changes = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;

  t.is(part1(changes), 4);
});

test('find not overlapping', (t) => {
  const changes = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;

  t.is(part2(changes), '#3');
});
