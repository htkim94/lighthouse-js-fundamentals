const camelCase = function(input) {
  let res = '';
  for (let i = 0; i < input.length; i++) {
    if (input[i - 1] === ' ') {
      res += input[i].toUpperCase();
    } else if (input[i] !== ' ') {
      res += input[i];
    }
  }
  return res;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));