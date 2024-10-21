const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('132')
const anotherId = Symbol('132')

console.log(id === anotherId);

const bigNumber = 324872387437n;

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Prem",
    age: 28,
}

const myFunction = function(){
    console.log("Hello World");
    
}


// stack (primitive), Heap (non-primitive)

let myYouTubeName = "premdotcom"

let anotherName = myYouTubeName

anotherName = "anything"

console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl.com"
}
let userTwo = userOne

userTwo.email = "prem@google.com"

console.log(userOne.email);
console.log(userTwo.email);


