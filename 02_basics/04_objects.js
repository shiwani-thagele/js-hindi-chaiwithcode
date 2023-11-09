//object singleton /constructor

// const tinderUser = new Object() //singlton

const tinderUser = {} //no diference {non singleton}
 tinderUser.id ="123abc"
 tinderUser.name ="shivi"
 tinderUser.isloggedin =false


//console.log(tinderUser);//empty object
const regularUser = {
    email:"shivi@gmail.com",
    fullname :{
        userfullname:{
            firstname :"shiwani",
            lastname : "thagele"

                }
    }
}
//console.log(regularUser.fullname.userfullname.lastname); //nested
//? => optional chaining  **

const object1 = {
    1:"a",
    2:"b"
}

const object2 ={
    3:"e",
    4:"f"
}
//const object3 = {object1,object2}
//console.log(object1,object2);
//console.log(object3);


//assign(target,source)
//const object3 = Object.assign(object1,object2)
 //const object3 = Object.assign({},object1,object2) //exact value will get,if we have more arrays then this will gurentee that target merge with source
// documenation => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 


const object3 = {...object1,...object2} // 90% used{ '1': 'a', '2': 'b', '3': 'e', '4': 'f' }
//console.log(object3);


//values coming from db

const users =[{
    id:1,
    email:"shivi@gmail.com"
},
{
    id:2,
    email:"shivithagel@gmail.com"
}]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); /**{ id: '123abc', name: 'shivi', isloggedin: false }
[ 'id', 'name', 'isloggedin' ] */
console.log(Object.values(tinderUser)) /**{ id: '123abc', name: 'shivi', isloggedin: false }
[ 'id', 'name', 'isloggedin' ]
[ '123abc', 'shivi', false ] */

console.log(Object.entries(tinderUser));
/**{ id: '123abc', name: 'shivi', isloggedin: false }
[ 'id', 'name', 'isloggedin' ]
[ '123abc', 'shivi', false ]
[ [ 'id', '123abc' ], [ 'name', 'shivi' ], [ 'isloggedin', false ] ] */

console.log(tinderUser.hasOwnProperty('isloggedin')); //check for validation



//objects destrtructuring and JSON API
 const course = {
    coursename :"js in hindi",
    courseprice : "999",
    courseInstructure : "hitesh"

 }

 //course.courseInstructure
 //const {courseInstructure} = course
 const{courseInstructure:instructor} = course //short form of courseinstructor object destructuring
 //console.log(courseInstructure);
 console.log(instructor);

//in react same concept
/* const navbar = ({company}) =>{

}
navbar(company = "softech") */

//API'S
//json strtcutre
/**{
   "name":"hitesh",
   "course":"js in hindi",
   "price":"free"
} /*

/** another way of json structure
 * [
    {},
    {},
    {},
    {}
]
* https://jsonformatter.org/ for reference 
*/