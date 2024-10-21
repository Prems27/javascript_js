const name = "prem"

const repoCount = 50

// No one uses this in modern time 
//console.log(name + repoCount + "Value");

// Instead we use backticks
console.log(`Hello my name is ${name} and my repo count is &{repoCount}`);

const gameName = new String(`premsharma`)

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   prem    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prem.com/prem%20sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('sharma'));

console.log(gameName.split('-'));


 