//Data Types preferd documentation for better understanding
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
//https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values

// 1.Primitive DataType  - 7 types
// Primitive : String , Number, Boolean , null, undefined,symbol,BigInt

//2.Reference DataType(Non primitive)
//Reference : Arrays,Objects,Functions  --> returntype object

//js is dynamic typed language

//****read typeof of all datatype for interview perspective***


//++++++++++++++++++++++++++++++++++++++++++++++++++++++ memeory stack and heap memeory ++++++++++++++++
// Stack (premitive) , Heap(Non - premitive)

let shiwani = "shiwanithagele@gmail.com"; // stack

let shivi = shiwani;
shivi = "thageleshiwani"
console.log(shivi);
console.log(shiwani);


let user1 = {
    email: "shivi@gmail.com",
    upi: "user01@ybl"
}

let user2 = user1;
user2.email = "user@gmail.com"
console.log(user2.email); //same
console.log(user1.email); //same

console.log(user1.upi); //same 
console.log(user2.upi); //same
