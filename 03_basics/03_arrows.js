const user = {
    username: "Nishar",
    price: 999,

    welcomeMessage: function(){
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Nishar"
//     console.log(this.username);
// }

// chai()//this function not working in function it works in objet

// const chai = function () {
//     let username = "Nishar"
//     console.log(this);
// }

const chai = () => {
    let username = "Nishar"
    //console.log(this);
}

chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2) //agr hm curly braces dete h to return krna pdega

const addTwo = (num1, num2) => ({username: "Nishar"}) //object ko bhi paranthesis dena padega


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()