//if statement

const isUsertrue = true;
const temperature = 23;

// if(2 !== 3){
//        //code execute
//            console.log("executed");
// }

// if(temperature < 50){
//     console.log("temp is less than 50");
// }else {
//     console.log("temp is greater than 50");
// }

/**const score = 300 

if(score > 100){
    const power = "fly"
    console.log(`user power ${power}`);
}

console.log(`user power ${power}`);//not execute power ,power is not defined
*/





// if(false){
//     //code will not execute 
// }

/**
 * <, > , <= , >= , == , != , === [check type also eg : 2 == "2" -> true , if 2 === 2 -> true(type of data is matters)]  , !==[strict checking,check negative ]
 * 
 */

//const balance =1000
 /**if(balance > 500) console.log("test"), console.log("test2");
  * //exectue in one line emplicite scope automatically add semicolon [;] , bu stataments can be written in one line by using comma [,] like this but not recommended
  * */

 //nesting
 /*if(balance < 500){
console.log("less than 500 ");
 }else if(balance < 750){
      console.log("less than 750");
 }else if(balance < 900){
    console.log("less than 750");
 }else{
    console.log("less than 1200");
 }
 **/

 //multiple if statement
 const userLoggedIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const  loggedInFromEmail = true

 if(userLoggedIn && debitCard && 2 == 3){
    console.log("allowe to buy curse"); 
 }
 if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
 }



 //https://www.guru99.com/difference-equality-strict-operator-javascript.html#:~:text=%3D%3D%20in%20JavaScript%20is%20used,datatype%20and%20compares%20two%20values.&text=Checks%20the%20equality%20of%20two,two%20operands%20with%20their%20types.