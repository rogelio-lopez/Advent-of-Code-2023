const fs = require('fs');
const dict = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9"
}

fs.readFile('test2.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  let dataArr = data.split('\n');
  dataArr = dataArr.slice(0, dataArr.length - 1);

  dataArr.forEach(n => {

    for (let [w, val] of Object.entries(dict)) {
      if (n.indexOf(w)) {
        n = n.replace(w, val);
      }
      console.log(n);
    }
    /*
        n.forEach(m => {
    
        });*/
  });
  console.log(data);
});
