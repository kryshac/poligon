var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


const input = [];
rl.on('line', (line) => input.push(line.split(' ')));

setTimeout(() => {
  console.log(input);
  console.log('\n\n');

  const [Y, X] = input[0];
  input.shift();

  const matrix = new Array(Y * 2 + 1).fill(0).map(_ => new Array(X * 2 + 1).fill('.'));

  for (let y = 0; y < Y * 2 + 1; y++) {
    for (let x = 0; x < X * 2 + 1; x++) {
      if (y % 2 && x % 2) {
        const value = input[(y - 1) / 2][(x - 1) / 2];
        matrix[y][x] = parseInt(value);
      }
    }
  }


  for (let y = 0; y < Y * 2 + 1; y++) {
    for (let x = 0; x < X * 2 + 1; x++) {
      if (y % 2 && x % 2) {
        const value = matrix[y][x];
        if (value != 0) {
          let {
            neighbor,
            line
          } = check(matrix, y, x);

          matrix[y][x] -= 1;
          matrix[neighbor.y][neighbor.x] -= 1;
          matrix[line.y][line.x] = line.y % 2 ? '|' : '_';
        }
      }
    }
  }


  for (let y = 0; y < Y * 2 + 1; y++) {
    for (let x = 0; x < X * 2 + 1; x++) {
      if (matrix[y][x] == 0) {
        matrix[y][x] = '.';
      }
    }
  }


  const result = matrix.slice(1).map(line => line.slice(1, -1));

  result.forEach((line, y) => {
    if (y % 2 == 0) {
      const newLine = line.map((column, x) => column == '.' ? result[y + 1][x] : column);
      console.log(newLine.join(''));
    }
  });



}, 1000);

const check = (matrix, y, x) => {
  if (y - 2 >= 0 && y - 2 < matrix.length && matrix[y - 2][x] != 0) {
    return {
      neighbor: {
        y: y - 2,
        x
      },
      line: {
        y: y - 1,
        x
      }
    };
  }

  if (matrix[y][x + 2] != 0) {
    return {
      neighbor: {
        y,
        x: x + 2
      },
      line: {
        y,
        x: x + 1
      }
    };
  }

  if (matrix[y + 2][x] != 0) {
    return {
      neighbor: {
        y: y + 2,
        x
      },
      line: {
        y: y + 1,
        x
      }
    };
  }

  if (matrix[y][x - 2] != 0) {
    return {
      neighbor: {
        y,
        x: x - 2
      },
      line: {
        y,
        x: x - 1
      }
    };
  }
};