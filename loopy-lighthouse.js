//Print number 100 to 200 to the console
//But if 
//the number is a multiple of 3, print the string "Loopy" instead of the number
//the number is a multiple of 4, print the string "Lighthouse" instead of the number
//the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number

let num = 100;
while (num <= 200) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (num % 3 === 0) {
    console.log('Loopy');
  } else if (num % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(num);
  }
  //Ternary Operator Way
  //num % 3 === 0 ? (num % 4 === 0 ? console.log('LoopyLighthouse') : console.log('Loopy'))
  // : (num % 4 === 0 ? console.log('Lighthouse') : console.log(num));
  num++;
}