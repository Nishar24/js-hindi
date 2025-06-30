//Dates

let myDate = new Date()
// console.log(myDate.toString());//Sat Jun 14 2025 19:26:51 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Sat Jun 14 2025
// console.log(myDate.toISOString());//2025-06-14T13:56:51.616Z
// console.log(myDate.toJSON());//2025-06-14T13:56:51.616Z
// console.log(myDate.toLocaleDateString());//14/6/2025
// console.log(myDate.toLocaleString());//14/6/2025, 7:26:51 pm
//console.log(typeof myDate);

//let myCreatedDate = new Date(2000, 2, 24)
//let myCreatedDate = new Date(2000, 1, 24, 5,3)
//let myCreatedDate = new Date("2000-02-24")
let myCreatedDate = new Date("02-24-2000")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})