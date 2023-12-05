const fs = require('fs');

const minVals = {
  "red": 0,
  "green": 0,
  "blue": 0
}
let total = 0;

fs.readFile('input2_1.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  let dataArr = data.split('\n');
  dataArr = dataArr.slice(0, dataArr.length - 1);

  dataArr.forEach(games => {

    games = games.split(': ')[1].replace(/;/g, ',');
    games = games.split(', ');

    minVals["red"] = 0;
    minVals["blue"] = 0;
    minVals["green"] = 0;

    games.forEach(set => {
      let color = set.split(' ')[1];
      if (minVals[color] < parseInt(set.split(' ')[0])) {
        minVals[color] = parseInt(set.split(' ')[0]);
      }
    });

    total += minVals["red"] * minVals["blue"] * minVals["green"];
  });

  console.log(total);
})
