const fs = require('fs');

let rows = [];
let numbers = [];
let cardWinnings = [];

//let a = { 1: 2 }
let scores = {};

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  rows = data.split('\n');
  rows = rows.slice(0, rows.length - 1);

  rows.forEach((row, i) => {
    let winningsNum = 0;

    cardWinnings = row.split(': ')[1].split(' | ')[0].split(' ').filter(n => n != '');
    numbers = row.split(': ')[1].split(' | ')[1].split(' ').filter(n => n != '');

    numbers.forEach(n => {
      if (hasWinningNums(parseInt(n), cardWinnings)) {
        winningsNum++;
      }
    });

    for (let j = i + 1; j < winningsNum + i; j++) {
      if (scores[j]) {
        scores[j] = scores[j] + 1;
      }
      else {
        scores[j] = 1;
      }
    }
  });

  console.log(scores);
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
