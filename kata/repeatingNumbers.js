const repeatNumbers = function(data) {
  let res = [];
  for (let d of data) {
    let s = '';
    for (let i = 0; i < d[1]; i++) {
      s += d[0];
    }
    res.push(s);
  }
  return res.length > 1 ? res.join(', ') : res[0];
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));