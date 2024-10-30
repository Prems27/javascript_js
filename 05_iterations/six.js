const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter((num) => num > 4)
console.log(newNums);


const newNums1 = myNums.filter((num) => {
    return num > 4 // we need to provide explicit return keyword here
})


const newNums2 = []

myNums.forEach((num) => {
    if(num > 4)
    {
        newNums2.push(num)
    }
})



console.log(newNums);


