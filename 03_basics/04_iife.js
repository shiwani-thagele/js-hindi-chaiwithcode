//immediately invoked function expression (IIFE)
/**
 * ()() //function definition - () , execution - ()
 * 
 * global scope ke pollution  se problem hoti hai kai bar toh us global scope ke variables ya joh bhi weha declarartion se weha problem hoti hai use hatane ke liye iife ka use iya jata hai 
 * 
 * 
 * */

//named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();

/* (()=>{
    console.log(`DB CONNECTED `); //(intermediate value)(...) is not a function
}) */

(()=>{
    console.log(`DB CONNECTED TWO`); //not perform coz iife has no idea where to stop the execution of function , chai function so we use ; at the end of the fucntion
});

//un-named iife
((name)=>{
    console.log(`db is connected ${name}`);
})('shiwani') // similar to chai('shiwani) === ('shiwani)

  
