const sayHello = function (name) {
  console.log('Hello, ' + name);
}

const sayHelloToConsole = function(name) {
  console.log('Hello, ' + name);
}

const returnSayHello = function(name) {
  return 'Hello, ' + name;
}

sayHello('Kevin');
sayHelloToConsole('Justin');
sayHello(returnSayHello('Tony'));