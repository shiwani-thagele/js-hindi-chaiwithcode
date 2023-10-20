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