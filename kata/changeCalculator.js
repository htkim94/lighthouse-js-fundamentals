const calculateChange = function(total, cash) {
  let remainder = cash - total;
  let res = {};

  const deno = [
    [2000, 'twentyDollar'],
    [1000, 'tenDollar'],
    [500, 'fiveDollar'],
    [200, 'twoDollar'],
    [100, 'oneDollar'],
    [25, 'quarter'],
    [10, 'dime'],
    [5, 'nickel'],
    [1, 'penny']
  ]

  for (let d of deno) {
    if ((remainder - d[0] >= 0)) {
      res[d[1]] = Math.floor(remainder / d[0]);
      remainder = remainder % d[0];
      if (remainder === 0) return res;
    }
  }
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));