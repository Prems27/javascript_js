// DATES

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate1 = new Date(2023 , 0 , 23)
console.log(myCreatedDate1.toString());

let myCreatedDate2 = new Date(2023 , 0 , 23, 5 , 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("01-12-2023")
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(myCreatedDate1.getTime);
console.log(Date.now());

console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()); // Months starts from zero (0) in JS
console.log(newDate.getMonth() + 1); // User should get actual month so added 1
console.log(newDate.getDay());

`${newDate.getDate()} and the time is ${newDate.getTime()}` // It is called as String Interpolation (Back Ticks) 

newDate.toLocaleString('default',{
    weekday: "long",
})







