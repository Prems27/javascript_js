// if
// <, >, <=, >=, ==, ===, !=, !==

const isUserLoggedIn = true
const temperature = 41

// if(2 === "2"){
//     console.log("executed"); 
// }

if(temperature < 50){
    console.log("less than 50");
}else{
    console.log("greater than 50"); 
}
console.log("Executed");

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

if(score > 100){
    var power = "fly" // the scope of var is completely global
    // so when we are printing any thing on console it ll get 
    // printed that should not be the case.
    // so thats the reason we don't use var either we use 
    // const or let
    console.log(`user power: ${power}`);
}

console.log(`user power: ${power}`);

const balance = 1000

if(balance > 500) console.log("test"); // this is called as implicit scope 
// we can write only one log in this line not more than that its not a good practice

if(balance > 500) console.log("test"),
console.log("test2"); // though we can write this way but not recommended


