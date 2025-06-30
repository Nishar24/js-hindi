//Immediately Invoked Function Expressions  (IIFE)


(function chai (){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); 

//() () //1st paranthesis for definition of function & 2nd for execution

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Nishar')