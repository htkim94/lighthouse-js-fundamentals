const urlEncode = function(text) {
  //using loop
  let newText = '', i = 0;
  while (i < text.length) {
    if (text[i] === ' ' && (i === 0 || i === text.length - 1)) {
      i++;
    } else if (text[i] === ' ') {
      newText += '%20';
      i++;
    } else {
      newText += text[i];
      i++;
    }
  }
  return newText;

  //using loop with split, join
  /*
  let c = text.split('');
  for (let i = 0; i < c.length; i++) {
    if (c[i] === ' ' && (i === 0 || i === c.length - 1)) {
      c.splice(i, 1);
    } else if (c[i] === ' ') {
      c[i] = '%20'
    }
  }
  return c.join('');
  */
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));