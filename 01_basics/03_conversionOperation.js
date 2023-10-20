//js is not strict check
//let score ="33abc"
//let score = null;
let score = undefined; 
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber );
console.log(valueInNumber); //NaN , 0,NaN

//"33" => 33
//"33ac" => NaN
//true => 1, false => 0

//let isLoggedIn = 1;
let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true,false

// 1 => true , 0 => false
//"" => false
//"hitesh" => true

let someNumber =  33
let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);//string

//------------operations[why string to number]-------------------
let value =8;
let negativeValue =  -value
console.log(negativeValue); //-8

//spme operators
//(2+2)
//(2-2)
//(2*2)
//(2**2)
//(2/2)
//(2%2)

let str1 = "shiwani"
let str2 = " thagele"
let str3 = str1+str2
console.log(str3);
//this is not preferd and not siggested by coder
console.log("1" + 2);//12
console.log(1+ "2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); // 32


console.log(+true); //1
//console.log(true+);//not possible
console.log(+""); //not preferd 
 
//again reduced code readability and create confusion
// let num1 , num2, num3
// num1 = num2 = nm3 = 2+3


let gameCounter =1999;
++gameCounter
console.log(gameCounter); //prefix and postfix operators


