const makeCamel = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      res += str[i].toUpperCase();
    } else if (str[i] !== ' ') {
      res += str[i];
    }
  }
  return res;
}

const makePascal = (str) => {
  let res = '';
  res += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      res += str[i].toUpperCase();
    } else if (str[i] !== ' ') {
      res += str[i];
    }
  }
  return res;
}

const makeSnake = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      res += '_';
    } else {
      res += str[i];
    }
  }
  return res;
}

const makeKebab = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      res += '-';
    } else {
      res += str[i];
    }
  }
  return res;
}

const makeTitle = (str) => {
  let res = '';
  res += str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
  }
  return res;
}

const makeVowel = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
  }
  return res;
}

const makeConsonant = (str) => {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      res += str[i];
    } else {
      res += str[i].toUpperCase();;
    }
  }
  return res;
}

const makeCase = function(input, cases) {
  if (typeof cases === 'string') {
    switch (cases) {
      case 'camel':
        return makeCamel(input);
      case 'pascal':
        return makePascal(input);
      case 'snake':
        return makeSnake(input);
      case 'kebab':
        return makeKebab(input);
      case 'title':
        return makeTitle(input);
      case 'vowel': 
        return makeVowel(input);
      case 'consonant':
        return makeConsonant(input);
      case 'upper':
        return input.toUpperCase();
      case 'lower':
        return input.toLowerCase();
    }
  } else {
    let res = '';
    for (let c of cases) {
      switch (c) {
        case 'camel':
          res = makeCamel(input);
          break;
        case 'pascal':
          res = makePascal(input);
          break;
        case 'snake':
          res = makeSnake(input);
          break;
        case 'kebab':
          res = makeKebab(input);
          break;
        case 'title':
          res = makeTitle(input);
          break;
        default:
          res = input;
      }
    }
    for (c of cases) {
      switch (c) {
        case 'vowel': 
          res = makeVowel(res);
          break;
        case 'consonant':
          res = makeConsonant(res);
          break;
      }
    }
    for (c of cases) {
      switch (c) {
        case 'upper':
          res = res.toUpperCase();
          break;
        case 'lower':
          res = res.toLowerCase();
          break;
      }
    }
    return res;
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));