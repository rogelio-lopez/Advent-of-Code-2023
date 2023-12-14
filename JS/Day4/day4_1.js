const fs = require('fs');

let rows = [];
let numbers = [];
let winnings = [];
let total = 0;

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  rows = data.split('\n');
  rows = rows.slice(0, rows.length - 1);

  rows.forEach(row => {
    let gameCount = 0;

    winnings = row.split(': ')[1].split(' | ')[0].split(' ').filter(n => n != '');
    numbers = row.split(': ')[1].split(' | ')[1].split(' ').filter(n => n != '');

    numbers.forEach(n => {
      if (hasWinningNums(parseInt(n), winnings) && gameCount == 0) {
        gameCount = gameCount + 1;
      }
      else if (hasWinningNums(parseInt(n), winnings) && gameCount > 0) {
        gameCount = gameCount * 2;
      }
    })

    total += gameCount;
  });

  console.log(total);
});

function hasWinningNums(n, winnings) {
  let wasFound = false;

  winnings.forEach(w => {
    if (n == parseInt(w)) {
      wasFound = true;
    }
  });
  return wasFound;
}
