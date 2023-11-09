//functions and  parameters

function sayMyname (){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("n");
    console.log("i");
}
/** sayMyname //refernce
sayMyname() //execution
*/
//function functionName(parameters)
 //functionName(arguments)

/*   function addTwoNum(number1 , number2){
     console.log(number1 + number2);
 }
 addTwoNum() //NaN
 addTwoNum(3,3) //6
 addTwoNum(3,"6") //36
 addTwoNum(3,"a") //3a
 addTwoNum(3,null) //3
 const result = addTwoNum(3,5) //8
 console.log("result value" ,result); //undefined 

 */

function addTwoNum(number1 , number2){
    // let result = number1 + number2  //this result variable have different value and scope than resukt outside functions
    // return result
    // console.log("shiwani"); //never execute coz of return
    
    return number1+number2
 }
 
 const result = addTwoNum(3,5) //8
 //console.log("result value" ,result);


 function loginUserMessage (username ="sam"){
    if(!username ){ //username === undefined
        console.log("please enter a user name");
    }
    return `${username} just logged in`
 }

  loginUserMessage("shivi") //nothing return
 //console.log(loginUserMessage("shiwani"));
 //console.log(loginUserMessage("shiwani")); //undefined ,sam override by shiwani 


 //rest operator / sprade operator
 function calculatecartprice(val1,val2,...num1){
    //val =222 , val2= 345 restvalues in num1 i.e. [678,2000]
        return num1
 }
//console.log(calculatecartprice(222,456,678,2000)) //packed in bundle return  array = [222,345,678]

const user = {
    username :'shiwani',
    prices:456
}
function handleuser(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
 //handleuser(user)

 handleuser(
    {
        username:"sam",
        price:345
    }
 )

  /* const mynewArray = [200,400,600,300]

 function returnsecondVlaue(getArray){
    return getArray[3]
 }
 console.log(returnsecondVlaue(mynewArray));
 */
