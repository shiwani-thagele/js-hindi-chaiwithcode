//let,var,const 

//scope -> {}
//global scope
//var c = 600;
let a =300;

if(true){ // block scope
    let  a =10;
    const b =23;
    // c = 24; //global scope,if var is not declared still problem remain same 
    console.log("inner value of a :",a);
}


//console.log(a); //a in not defined
//console.log(b); //b is not defined
//console.log(c); //24

console.log(a);

//*** in your browser if you check scope is different , than your code enviroment by using node 

