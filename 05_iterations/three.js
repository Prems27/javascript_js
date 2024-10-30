// for of

// this loops are Array specific loops

// ["", "", ""] 
// [{}, {}, {}] -> this are objects in Array

const arr = [1,3,5,7]

for (const num of arr) {
    console.log(num);   
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

// maps

const map = new Map()

map.set('In', "India")
map.set('Br', "Brazil")
map.set('Fr', "France")
map.set('In', "India")

console.log(map);

for (const key of map) { // 1>
    console.log(key);
}

for (const [key, value] of map) {  // 2>
    console.log(key, ':-', value);
}

const myObject = { // 1>
    'game1': 'NFS',
    'game2': 'spiderman'
}
const myObject1 = { // 2>
    game1: 'NFS',
    game2: 'spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}