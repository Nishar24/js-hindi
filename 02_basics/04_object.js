//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nishar",
            lastname: "Alam",
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}//...spread the value
//console.log(obj3);



const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {    
    },
    {
    },
    {
    },
    {
    },
]

users[1].email
// console.log(tinderUser); 

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

//cousre.courseInstructor

//const {courseInstructor: instructor} = course
const {coursename} = course

console.log(coursename);

// {
//     "name": "Nishar",
//     "course": "js in hindi",
//     "price": "free",
// }

