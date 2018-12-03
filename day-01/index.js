/* eslint no-constant-condition: 0, no-continue: 0 */

const part1 = input => input.split('\n').reduce((a, c) => a + Number(c), 0);

const part2 = (input) => {
  const found = { 0: true };
  let sum = 0;

  while (true) {
    for (const line of input.split('\n').filter(l => l !== '').map(Number)) {
      sum += line;

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
