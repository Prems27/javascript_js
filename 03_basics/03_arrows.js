const user = {
    userName: "Prem ", 
    price: 999 ,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        // console.log(this);
    }

}

user.welcomeMessage();
user.userName = "babu"
user.welcomeMessage()

console.log(this);

function chai(){
    let userName = "Prem"
    console.log(this.userName); 
}
chai()


const chai = function(){
    let userName = "Prem"
    console.log(this.userName); 
}

chai()

const chai = () => {
    let userName = "Prem"
    console.log(this.userName); 
}

const chai = () => {
    let userName = "Prem"
    console.log(this); 
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // this is an explicit return
// }
// console.log(addTwo(3, 4));


const addTwo = (num1, num2) => num1 + num2 // this is called as implicit return
                                          // if we write this in 
                                          // curly braces then need to write the return keyword
const addTwoo = (num1, num2) => (num1 + num2) // this is called as implicit return
                                            // if written in round braces 
                                            // the no need to write the return keyword 

const addTwooo = (num1 , num2) => {{userName: "Prem"}}
    // to written an object you need to wrap them in curly braces
console.log(addTwo(3, 4)); 

const myArray = [2]
