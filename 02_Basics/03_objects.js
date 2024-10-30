// Objects Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Prem",
    "full name": "Prem Sharma",
    [mySym]: "myKey1",
    age: 28,
    location: "Amravati",
    email: "prem@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "prem@yahoo.com"
Object.freeze(jsUser)
jsUser.email = "prem@chatgpt.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}

//console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



