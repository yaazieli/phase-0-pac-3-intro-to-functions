function sayHello() {
  console.log("Hello!");
  }
sayHello();


function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();


function doSomething(thing) {
  console.log(thing);
}

doSomething("anything"); // passing the argument 'anything' into our function


function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Isabel"); // "Hello, Isabel!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"

// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

//console.log(firstName) this would get an error saying first name is not defined. Related to variable scope.

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`);
}
say("Goodbye", "Julio");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}
say("Julio", "hello");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}


function add(x, y) {
  return x + y;
}
console.log(add(1, 2));


function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Sofia"));



function say(greeting, firstName) {
  console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy", "partner"));


function say(nameCall) {
    console.log("Pay Attention,");
    return `${nameCall}!`;
}
console.log(say("Silly"));
