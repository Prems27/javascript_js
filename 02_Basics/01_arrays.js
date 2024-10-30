// Array

const myArr = [1,2,3,4,5]

console.log(myArr[1]);

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4,5);

// Array Methods

myArr.push(6);
myArr.push(7)

myArr.pop() // removes last value

myArr.unshift(9) // add the value into the start of the array
myArr.shift() // it will remove the value from the array just like a pop() method
            // we dont pass any argument to pop() and shift()
console.log(myArr.includes(9)); 
console.log(myArr.indexOf(11)); 
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice , Splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2); 





 

