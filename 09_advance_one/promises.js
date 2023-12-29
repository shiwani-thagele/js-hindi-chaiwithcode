//future mein execute hoga , consume krte hai

//1.
// fetch('https://googledrivelinks.com/download-scalar-academy-dsa-course-for-free-download-google-drive-links/').then().catch().finally()

//2. how to make promises
//A Promise is an object representing the eventual completion or failure of an asynchronous operation , this concept Promise is from es6 

//promise available nahi tha phle toh tab ,async and await use krte the and bluebird , queue libraries. finally this libraray integreted with pure js and its avaialabe default.
//perfomance  node js < then other libraraies

//creation and consumption

//creation
//resolve ->connect to then()
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls ,Cryptography , network call etc.
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

//2.
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("asysn 2 resolved");
})


//3 another promise 
//creation
const promiseThree = new Promise(function(resolve,reject){
    //take data from network,file system
    setTimeout(function(){
     resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
//consumption
promiseThree.then(function(user){
     console.log(user);
})

//promise 4 *******

const promiseFour = new  Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true //false
        if(!error){
            resolve({username:"shiwani",password:"12345"})
        }else{
            //rejection
            reject('ERROR:something went Wrong')
        }
    },1000)
})
//got error by this code for a reason
// const username = promiseFour.then((user)=>{
//     //callback hell!
//     console.log(user);
//     return user.username
// })
// console.log(username);

promiseFour
.then((user)=>{
    //callback hell!
    console.log(user);
    return user.username
})
.then((username)=>{ //chaining
  console.log(username);
})
.catch(function(error){
    console.log(error);
})
//finally is default, yeh execue hoga hi hoga 
.finally(()=> console.log("The Peomise is either Resloved or Rejected"))



//promise 5 
const promiseFive =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true //false
        if(!error){
            resolve({username:"javascript",password:"12345"})
        }else{
            //rejection
            reject('ERROR: JS  went Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()

//behind the scene 

/**async function getAlluers(){
   try {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data= await response.json()
  console.log(typeof(data));

//console.log(response); same data will print 
   } catch (error) {
    console.log("E:",error);
   }
}
getAlluers()*/

// Alternate -> using .then(),.catch() ,we did not required trycatch
//all the data from given link will print first
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=> console.log(error))

//question fetch() where you get 404 error, reolve or reject  -> we get so we get it in resolve. mdn docs**
//-https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

//on diagram 