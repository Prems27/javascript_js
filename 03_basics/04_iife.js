// Immediately Invoked Function Expressions

(function chai(){ // this is called ad named IIFE
    console.log(`DB CONNECTED`);
})(); // semi-colon needed to end the function
       // otherwise it will throw an error

(function aurcode(){ // this is called ad named IIFE
    console.log(`DB CONNECTED TWO`);
})(); 

((name) => { // this is called as unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
})('Prem')
 