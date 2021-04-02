//Looping-Range Challenge
let range = (start, end, step) => {
  if (start === undefined || end === undefined 
    || step === undefined || start > end || step <= 0) {
    return [];
  } else {
    let res = [];
    let runningSum = start;
    while (runningSum <= end) {
      res.push(runningSum);
      runningSum += step;
    }
    return res;
  }
}

console.log(range(2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));