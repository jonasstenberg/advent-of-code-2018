const part1 = (input) => {
  const grid = {};

  for (const line of input.split('\n').filter(l => l !== '')) {
    const [, , coordinates, size] = line.split(' ');
    const [left, top] = coordinates.slice(0, -1).split(',').map(Number);
    const [width, height] = size.split('x').map(Number);
    for (let x = left; x < left + width; x += 1) {
      for (let y = top; y < top + height; y += 1) {
        grid[`${x},${y}`] = (grid[`${x},${y}`] || 0) + 1;
      }
    }
  }

  return Object.values(grid).filter(v => v > 1).length;
};

const part2 = (input) => {
  const grid = {};
  const claims = {};

  for (const line of input.split('\n').filter(l => l !== '')) {
    const [num, , coordinates, size] = line.split(' ');
    const [left, top] = coordinates.slice(0, -1).split(',').map(Number);
    const [width, height] = size.split('x').map(Number);

    claims[num] = true;
    for (let x = left; x < left + width; x += 1) {
      for (let y = top; y < top + height; y += 1) {
        if (grid[`${x},${y}`]) {
          claims[grid[`${x},${y}`]] = false;
          claims[num] = false;
        }

        grid[`${x},${y}`] = num;
      }
    }
  }

  return Object.keys(claims).find(v => claims[v] === true);
};

module.exports = {
  part1,
  part2,
};
