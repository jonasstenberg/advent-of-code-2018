import test from 'ava';

import { part1, part2 } from './solution';

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

