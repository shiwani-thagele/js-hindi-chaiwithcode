//let,var,const 

//scope -> {}
//global scope
//var c = 600;
let a =300;

if(true){ // block scope
    let  a =10;
    const b =23;
    // c = 24; //global scope,if var is not declared still problem remain same 
    //console.log("inner value of a :",a);
}


//console.log(a); //a in not defined
//console.log(b); //b is not defined
//console.log(c); //24

//console.log(a);

//*** in your browser if you check scope is different , than your code enviroment by using node 


//nested scope - nested function usualy child function user varibles fo parents 

function one(){
    const username = "shiwai"

    function two(){
    const  lastname = "thagele"
    //console.log(username);
    }
 //   console.log(lastname);
    two()
}

one()

if(true){
    const user ="shiwani"
    if(user === "shiwani"){
        const website = "youtube"
        //console.log(user + website);
    }
    //console.log(website); //not accesd coz of scope
}
//console.log(user); //user is not define coz of scope

//*****************************interesting ********************/
console.log(addone(5));
function addone(num){
    return num + 1
}



//expression
addTwo(5) // Cannot access 'addTwo' before initialization "Hoisting"
const addTwo = function(num){
    return num +2
}

