import test from 'ava';

import readInput from '../utils/read-input';
import { part1, part2 } from '.';

test('Day 2, Part 1', (t) => {
  const input = readInput('./day-02/input.txt');

  t.is(part1(input), 9139);
});

test('Day 2, Part 2', (t) => {
  const input = readInput('./day-02/input.txt');

  t.is(part2(input), 'uqcidadzwtnhsljvxyobmkfyr');
});

test('should calculate the checksum between these values', (t) => {
  const changes = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

  t.is(part1(changes), 12);
});

test('should return common letters between these values', (t) => {
  const changes = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

  t.is(part2(changes), 'fgij');
});

