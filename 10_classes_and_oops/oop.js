const user = {
    userName : "shiwani",
    loginCount : 9,
    signen: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username:${this.userName}`);
        console.log(this); //current context
    
    }
}
// const user2 = {
//     userName : "harsh",
//     loginCount : 12,
//     signen: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         //console.log(`username:${this.userName}`);
//         console.log(this); //current context
    
//     }
// }

// console.log(user);
// console.log(user.userName);
//console.log(user.getUserDetails());

//console.log(this); //yeha node emviroment mein global context retunr -> empty parenthesis : {}
//browser global context mein bohot sari chheza hai 

//constructor function
// const promiseOne =  new Promise()
// const date = new Date()
//new keyword is constructor function ,it allowes you to create multiple instatance from one object but some situation we need a new instance so for that new keyword is udes for creating new context.

function user1(username , loginCount,isLogedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLogedIn =  isLogedIn;
    this.greedings = function(){
        console.log(`welcome ${this.username}`);
    }
    return this; 
     //bydefault it will return , but incase if we use new keyword otherwise we get error 
    
    
}

//if we don't use new keyword then we get current context with default code and it will override the previos code too for eg- user2 -> ovveried user2
const userOne = new user1("shivi",23,true);
const userTwo = new user1("chai aur code",11,false)

console.log(userOne.constructor); ///return function user1
console.log(userOne instanceof user1); //true
//console.log(userTwo);


