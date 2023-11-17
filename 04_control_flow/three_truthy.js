const userEmail = "shiwani@gmail.com"
const userEmail2 = ""
const userEmail3 = []
if(userEmail3){
    console.log("got user email");
}else{
    console.log("do  not have user yet!");
}

//falsy values 
//false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN 

//truthy
//"0" , 'false' , " "(with space) , [] , {} (object) , function(){}



// if(userEmail3.length === 0 ){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("object is empty");
}

//**************** General kowldege for interview ****************** */
//false == 0 return true
// false == '' return true
// 0 == '' return true


//Nullish coalescing operator (??) : null undefined only for null & undefined

let val1;
 // val1 = 5 ?? 10
//val1 = null ?? 10
//val1= undefined ?? 15
val1= null?? 10 ??20
console.log(val1);
//returned value 5 , 10 , 15 , 10   instead of 10 some complex functions are cal or no answer will provide then return null



//ternary operator 
//condition ? true : false
const iceTeaprice = 120
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80");
