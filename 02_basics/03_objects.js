//singleton
//Object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Nishar",
    "full name": "Nishar Alam",
    [mySym]: "mykey1",
    age: 20,
    location: "New Delhi",
    email: "nishar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "nishar@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "nishar@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());