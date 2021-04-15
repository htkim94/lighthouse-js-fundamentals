const conditionalSum = function(values, condition) {
  // Your code here
  let res = 0;
  if (values.length === 0) {
    return res;
  } else if (condition === 'even') {
    for (let v of values) {
      if (v % 2 === 0){
        res += v;
      }
    }
  } else {
    for (let v of values) {
      if (v % 2 !== 0) {
        res += v;
      }
    }
  }
  return res;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));