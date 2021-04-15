const sumLargestNumbers = function(data) {
  if (data.length === 2) {
    return data[0] + data[1];
  } else {
    let highest = data[0], second = -Infinity;
    for (let i = 1; i < data.length; i++) {
      if (data[i] > highest) {
        second = highest;
        highest = data[i];
      } else if (data[i] > second) {
        second = data[i];
      }
    }
    return highest + second;
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));