import test from 'ava';

import { part1, part2 } from './solution';

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
