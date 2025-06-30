//Primitive//call by value hota h

//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

// const = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789876543n




//Refrence(Non Primitive)

//Array,Object,function

const heros = ["Salman", "Shahrukh", "Amir"]  //Array

let myObj = { //Object // curly braces k ander jo bhi hoga object hoga
    name: "Nishar"
//age: 24,
}

const myFunction = function(){
    console.log("Hello World")
}

//https://262.ecma-international.org/5.1/#sec-11.4.3  read carefully

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive)-copy milta h data ka, Heap(Non-Primitive)-original value milta h
let myYoutubename = "Nisharvlogs"

let anothername = myYoutubename
anothername = "Chaiaurcode"
console.log(anothername);

let userOne = {
    email: "nishar@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

  userTwo.email = "user@google.com"

  console.log(userOne.email)
  console.log(userTwo.email)
