const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  let total = 0;
  let numberArr = [];
  let dataArr = data.split('\n');
  dataArr = dataArr.slice(0, dataArr.length - 1);


  dataArr.forEach(n => {
    numberArr.push(n.split('').filter(c => c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57));
  });

  numberArr.forEach(c => {
    if (c.length == 1) {
      total += parseInt(c[0] + c[0]);
    }
    else {
      total += parseInt(c[0] + c[c.length - 1]);
    }
  });

  console.log(total);
});
