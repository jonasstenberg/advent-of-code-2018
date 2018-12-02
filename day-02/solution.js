const part1 = (input) => {
  const ids = input.split('\n');
  const count = (num) => {
    const result = ids.map((id) => {
      const chars = id.split('');
      const found = {};
      chars.forEach((char) => {
        found[char] = found[char] ? found[char] + 1 : 1;
      });

      return Object.keys(found).filter(char => found[char] === num).length ? 1 : 0;
    });

    return result.reduce((a, c) => a + c);
  };

  const twice = count(2);
  const thrice = count(3);
  return twice * thrice;
};

const part2 = (input) => {
  const ids = input.split('\n');
  let result;

  for (const id of ids) {
    const firstChars = id.split('');

    for (let i = ids.indexOf(id) + 1; i < ids.length; ++i) {
      const diff = [];
      const secondChars = ids[i].split('');

      for (let j = 0; j < firstChars.length; ++j) {
        if (firstChars[j] !== secondChars[j]) {
          if (diff.push(firstChars[j]) >= 2) {
            break;
          }
        }
      }

      if (diff.length === 1) {
        result = id.replace(diff[0], '');
      }
    }
  }

  return result;
};

module.exports = {
  part1,
  part2,
};

