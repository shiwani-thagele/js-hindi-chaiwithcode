//comparison
// console.log(5 >3);
// console.log(5 >=3);
// console.log(5 <3);
// console.log(5 ==3);
// console.log(5 !=3);

console.log("2" >1); //true
console.log("02" > 1); //true


//avoid 
console.log(null >0); //false
console.log(null ==0 ); //false
console.log(null >= 0); //true 0>=0 -> true
 /* eqaulity check == and comparisons > < >= <= work differnetly
 comparison convert null to a  number ,treating it as 0 
 theta why (3) null >= 0 is true and (1) null > 0  is false */


 //avoid 
 //in case of undefine it will give false in all 3 cases
 console.log(undefined>0);
 console.log(undefined==0);
 console.log(undefined >= 0);

//=== checks whether its two operands are equal, returning a Boolean result
console.log("2" === 2);//false