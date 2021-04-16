const numberOfVowels = function(data) {
  //solution using loop
  let res = 0;
  for (let d of data) {
    if (d === 'a' || d === 'e' || d === 'i' || d === 'o' || d === 'u') {
      res++;
    }
  }
  return res;

  //solution using regex
  //return data.match(/[aeiou]/gi).length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));