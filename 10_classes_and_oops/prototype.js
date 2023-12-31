// let myName = "shivi   "
// let myhobby = "songs    "
//console.log(myName.truelength); // truelength : undefined
//console.log(myName.trim().length);


let myHeros = ["thor","ironman"];

let heroPower = {
    thor : "hammer",
    ironman : "flying",

    getironmanPower : function(){
           console.log(`ironman power is ${this.ironman}`);
    }
}
Object.prototype.shivi = function(){
    console.log(`hites is present in all objects `);
}

Array.prototype.heyshivi = function(){
    console.log(`hey shivi`);
}

myHeros.shivi()
//heroPower.shivi()
myHeros.heyshivi()
//heroPower.heyshivi()

//inheritance
const user={
    name:"shivi",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvaialable : false
}
const TASupport ={
       makeAssignment :'js Assignment',
       fullTime: true,
       __proto__:TeachingSupport
}
Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let Username2 = "          shiwani thagele      " 
String.prototype.trueLength =  function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}
Username2.trueLength()
"shiwani".trueLength()
"coldcoffee".trueLength()