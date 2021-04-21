const multiplicationTable = function(maxValue) {
  let res = '';
  if (maxValue === 1) {
    return res += `${maxValue}\n`;
  } else {
    for (let i = 1; i <= maxValue; i++) {
      let runningSum = 0;
      for (let j = 0; j < maxValue; j++) {
        runningSum += i;
        res += `${runningSum} `;
      }
      res += '\n';
    }
  }
  return res;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));