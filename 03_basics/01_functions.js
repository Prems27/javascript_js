function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("M");
}

sayMyName // this is a function reference
sayMyName() // this is function execution

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}

addTwoNumbers(3, 4);
addTwoNumbers(3, "4");
addTwoNumbers(3, "a");
addTwoNumbers(3, null);

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addTwoNumbers(3, 7)

console.log(result);

function loginUserMessage(userName){
    if(userName === undefined){     // way 1st
        console.log("Please enter a username");
        return
    }
    if(!userName){                  // way 2nd
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("Prem"));
console.log(loginUserMessage()); // this will give us Undefined in O/P

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 600, 700));

const user = {
    userName: "Prem",
    price: 199
}
 function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);  
 }

 // handleObject(user)
 handleObject({
    userName: "babu",
    price: 399
 })

 const myNewArray = [200, 700, 500, 300]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200, 700, 500, 300]));
 
 