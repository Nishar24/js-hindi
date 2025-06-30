var c = 300//here outside the scope will not print the value
let a = 300//but let will show outside 
if(true){
    let a = 10
    const b = 20
    //console.log("INNER: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);




function one (){
    const username = "Nishar"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()

}

//one()

if (true) {
    const username = "Nishar"
    if (username === "Nishar"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


//++++++++++++++++ interesting +++++++++++++++++


console.log(addone(5));

function addone(num){
    return num + 1
}



//console.log(addTwo(5));//this will not work here
const addTwo = function(num){
    return num + 2
}

