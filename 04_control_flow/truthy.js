const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("don't have user email");
}

// falsy values:-> 
// false, 0 , -0, BigInt 0n, "" , null, undefined, Nan

// truthy values:->
// "0", 'false', " ", [], function(){}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator(??) : null , undefined

let val1;

val1 = 5 ?? 10

val1 = null ?? 10

val1 = undefined ?? 10

val1 = null ?? 10 ?? 20

console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 80");

