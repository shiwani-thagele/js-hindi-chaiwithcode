const user = {
    username : "shiwani",
    price : 999,

    welcomemessage : function(){
        //this -> refere crrent context
        console.log(`${this.username}, welcome to website`);
        //console.log(this);///current values
    }
      
}
// user.welcomemessage()
// user.username = "sam" //change current objects context
// user.welcomemessage()

//console.log(this); //refer empty object coz global scope, in browser we get different valus like global object windows etc.

 /* function chai(){
    let username = "shiwani"
    console.log(this.username); //undefined ,  this only used in objects bt not in function
}

chai() */

/* const chai = function(){
    let user = "shiwani"
    console.log(this.user); //undefined
}
chai() */

//arrow
const chai = () => {
    let user = "shiwani"
    console.log(this.user); //undefined
    console.log(this);//{}
}
//chai()

/* arrow function syntax - () => {

} */

// const addTwo = (num1, num2)=>{
//          return num1 + num2
// }
 

//implicite return 
//const addTwo = (num1,num2) => num1+ num2 //9
//const addTwo = (num1,num2) => (num1+ num2) //if we use { } then we have to use return keyword , but if we use () not need a return keyword , it will hep in react also 
//const addTwo = (num1,num2) => {username :"shiwani"} //undefined
const addTwo = (num1,num2) => ({username :"shiwani"}) //{ username : 'shiwani' }

console.log(addTwo(4,5)); //9


// const myArray = [6,7,8,2,7,8] 

// myArray.forEach(() => {})