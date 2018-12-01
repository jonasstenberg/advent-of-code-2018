/* eslint no-constant-condition: 0, no-continue: 0 */

const part1 = input => input.split('\n').reduce((a, c) => a + Number(c), 0);

const part2 = (input) => {
  const arr = input.split('\n').map(Number);
  const found = { 0: true };
  let sum = 0;

  while (true) {
    for (const a of arr) {
      if (a === 0) continue;

      sum += a;

      if (found[sum]) {
        return sum;
      }

      found[sum] = true;
    }
  }
};

module.exports = {
  part1,
  part2,
};
