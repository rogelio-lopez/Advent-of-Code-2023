const fs = require('fs');

let dataArr = [];

fs.readFile('test.txt', 'utf-8', (err, data) => {
  if (err) throw err;

  data.split('\n').forEach(line => {
    dataArr.push(line.split(''));
  });

  let total = 0;
  let endIndex = dataArr.length - 1;

  for (let i = 0; i <= endIndex; i++) { //Top Line 
    if (i == 0) {
      total += topLine(dataArr[0], dataArr[1]);
    }
    else if (i == endIndex) { //Bottom Line (similar functionality to top)
      total += bottomLine(dataArr[endIndex], dataArr[endIndex - 1]);
    }
    else { //Middle lines
      total += middleLine();
    }
  }
});

function topLine(top, second) {
  let l = top.length;
  let sum = 0;

  for (let i = 0; i < l; i++) {
  }
  return 0;
}

function bottomLine(bottom, secondToBot) {
  return 0;
}

function middleLine() {
  return 0;
}



function isNum(charac) {
  if (charac.charCodeAt(0) >= 48 && charac.charCodeAt(0) <= 57) {
    return true;
  }
  return false;
}

function isPeriod(charac) {
  if (charac.charCodeAt(0) == 46) {
    return true;
  }
  return false;
}
