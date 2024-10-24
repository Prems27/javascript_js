const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length());
console.log(balance.toFixed());

const otherNumber = 23.7890

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4,6));
console.log(Math.ceil(4,2));
console.log(Math.floor(4,9));

console.log(Math.min(4,3,6,7));
console.log(Math.max(6,2,1,4));

console.log(Math.random);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() *10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1));

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

 



