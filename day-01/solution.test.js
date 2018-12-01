import test from 'ava';

import { part1, part2 } from './solution';

test('should calculate frequency from +1, -2, +3, +1', (t) => {
  const changes = `+1
-2
+3
+1`;

  t.is(part1(changes), 3);
});

test('should calculate first duplicate frequency from +1, -1', (t) => {
  const changes = `+1
-1`;

  t.is(part2(changes), 0);
});

test('should calculate first duplicate frequency from +3, +3, +4, -2, -4', (t) => {
  const changes = `+3
+3
+4
-2
-4`;

  t.is(part2(changes), 10);
});

test('should calculate first duplicate frequency from -6, +3, +8, +5, -6', (t) => {
  const changes = `-6
+3
+8
+5
-6`;

  t.is(part2(changes), 5);
});

test('should calculate first duplicate frequency from +7, +7, -2, -7, -4', (t) => {
  const changes = `+7
+7
-2
-7
-4`;

  t.is(part2(changes), 14);
});
