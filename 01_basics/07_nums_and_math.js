//======================= NUMBER ================
const score = 300
//console.log(score)


const balance = new Number(899)
//console.log(balance);

//toString()
//console.log(balance.toString().length);

//typeof()
//console.log(typeof(balance)); //object

//toFixed()
//console.log(balance.toFixed(2)); //899.00

//toPrecision
const Number2 =  134.687 // 1134 =>1.13e+3
//console.log(Number2.toPrecision(3));

//toLocalString
const number3 = 100000
//console.log(number3.toLocaleString('en-IN')); //indian number system


//======================== MATHS ===================

// console.log(Math);//object

//abs()
// console.log(Math.abs(-12));

//round()
// console.log(Math.round(6.5));

//ceil() =>  rounds up and returns the smallest integer greater than or equal to a given number
// console.log(Math.ceil(4.3)); //roundeup 

//floor() => return largest integer <= given integer
// console.log(Math.floor(6.8)); 

//pow()
// console.log(Math.pow(16,67)); //power 

//min()
// console.log(Math.min(0,6,5,3,8,7,98)); //minimun

//max()
// console.log(Math.max(0,6,5,3,8,7,98)); //maximum

//random()
console.log(Math.random()); // lie b/w 0-1
console.log(Math.floor(Math.random()*10)+1);// minimun value will be 1 not zero

const min = 10;
const max =20;

console.log(Math.floor(Math.random() * (max-min +1)) + min);