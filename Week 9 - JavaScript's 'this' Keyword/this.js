// 'use strict'
function Obj() {
  (this.ham = "yes"),
    (this.bacon = "yes"),
    (this.legs = "4"),
    (this.makeNoise = function() {
      this.bacon = "please";
      console.log("oink!");
    });
}
const one = { one: "one" };
const testObj = new Obj();

function pigNoise() {
  this.b = "foo";
}
pigNoise.bind(this)();

// These examples below have been borrowed from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#The_bind_method
//this inside of function
function thisFunction() {
  return this;
}

console.log(thisFunction() === window);

//Arrow Functions
const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject);

// Call as a method of an object
const obj = { func: foo };
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
