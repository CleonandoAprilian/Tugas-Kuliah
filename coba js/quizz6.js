const number = 123;
const string = "Dicoding";
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); //true
console.log(boolFromString); //true
console.log(boolFromNull); // false

console.log(typeof boolFromNumber);
console.log(typeof boolFromString);
console.log(typeof boolFromNull);
