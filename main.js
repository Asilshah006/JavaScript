let myNumber = 42;
let myFloat = 42.0;
let myString = "42.123asc"

console.log(myNumber===myFloat);
console.log(myNumber===myString);
console.log(myNumber===Number(myString));
console.log(Number(false))
console.log(Number.isInteger(myNumber))
console.log(typeof Number.parseFloat(myNumber))
console.log(typeof myNumber.toString())
console.log(Number.parseFloat(myString))
