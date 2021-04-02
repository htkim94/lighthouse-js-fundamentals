//Concatenate Arrays Challenge
//using loop and push()
let concat = (arr1, arr2) => {
  let res = arr1;
  arr2.forEach(function(e) {
    res.push(e);
  });
  return res;
}

/* using concat function
let concat = (arr1, arr2) => {
  return arr1.concat(arr2);
}
*/

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
