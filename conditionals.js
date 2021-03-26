const raining = true;
const temperature = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
}

//temp below 0 will tell us to wear scarf
//temp over 15 will tell us short sleeves are fine
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");