const number = 123;
const boolean = true;
const float = 3.14;

const strNumber = String(number);
const strBoolean = boolean.toString();
const strFloat = String(float);

console.log(strNumber); // "123"
console.log(strBoolean); // "true"

console.log(typeof strNumber); // string

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // 123
console.log(floatFromString); //3.14

console.log(typeof numFromString); //number
console.log(typeof floatFromString); //number
