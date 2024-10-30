// var c = 300
let a = 300
if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inner", a);
    
}

// console.log(a);
// console.log(b);
console.log(c);

function one(){
    const userName = "Prem"

    function two(){
        const website = "youtube"
        console.log((userName));    
    }
    console.log(website);
    
    two()
}

//one() 

if(true){
    const userName = "Prem"
    if(userName === "Prem"){
        const website = " youtube"
        //console.log(userName + website);
    }
  //  console.log(website);  
}

// console.log(userName);


addone(5) // we can write this before calling a function
function addone(num){
    return num + 1
}

//addone(5)

// addTwo(5) ===> we can't write this before calling a function because we have declared a variable here 
            // so it won't allow us to do this
const addTwo = function(num){
    return num + 2
}

addTwo(5)  