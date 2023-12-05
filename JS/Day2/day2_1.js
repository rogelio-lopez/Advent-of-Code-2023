const fs = require('fs');

const dict = {
  "red": 12,
  "green": 13,
  "blue": 14
}
let total = 0;

fs.readFile('input2_1.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  let dataArr = data.split('\n');
  dataArr = dataArr.slice(0, dataArr.length - 1);

  dataArr.forEach((games, index) => {
    let impossible = false;

    games = games.split(': ')[1].replace(/;/g, ',');
    games = games.split(', ');

    games.forEach(set => {
      if (dict[set.split(' ')[1]] < parseInt(set.split(' ')[0])) {
        impossible = true;
      }
    });

    if (!impossible) {
      total += index + 1;
    }
  });

  console.log(total);
})
