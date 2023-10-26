//singleton -constructor

//object literals

//Object.create() -> constructor

const mysym = Symbol("key1") //

const userjs = {
  name:"shiwani",
  "fullname":"shiwani thagele", //exception can't access through dot eg= userJs.fullname {gives error} , only use square notation  -> userjs["fullname"]
  //mysym:"mykey1",//string
  [mysym] :"mykey1", //symol syntax
  age: 18,
  location:"indore",
  email:"shiwani@gmail.com",
  isLoggedIn : false,
  lastloginDay : ["mondya","friday"],
}

//console.log(userjs.email);
//console.log(userjs["email"]); //take it as a string becaose everything in object decalration treat as a string

//console.log(userjs["fullname"]);
//console.log(typeof(userjs.mysym)); //string
//console.log(typeof(userjs[mysym])); //string

//override by equal (=) operator
//userjs.email = "shivi@gmail.com"

//freez the object
//Object.freeze(userjs) 
//console.log(userjs);

userjs.greetings = function(){
    console.log("hellow js user");
}
userjs.greetingstwo = function(){
    console.log(`hellow js user ${this.name}`);
}


//console.log(userjs.greetings);//undefined
const a = userjs.greetings()
console.log(a);
console.log(userjs.greetingstwo());
