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

  let charArr = [];
  let dataArr = data.split('\n');
  dataArr = dataArr.slice(0, dataArr.length - 1);

  // replace word with nums
  dataArr.forEach(n => {

    for (let i = 2; i < n.length; i++) {
      if ()
    }


    for (let [w, val] of Object.entries(dict)) {
      n = n.replaceAll(w, val);
      console.log(n);
    }
  });
  //console.log(data);
});
