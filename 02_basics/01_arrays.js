//Array

//Aarray declaration
const myArray = [0,1,2,3,4,5]
const myArrays2 = ["shiwani" , "harsh","ayush","somya"];
const myArray3 = new Array(1,2,3,4,5);

console.log(myArray[2]);
console.log(myArray3.length);


//Array mehtods

/* myArray.push(6);
myArray.push(7);
myArray.pop() */


/* myArray.unshift(9) //insert at start of the array
myArray.shift(); //remove 9
*/

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

// const newArray = myArray.join() //bind and convert the array into string
// console.log(newArray);//normal format
// console.log(myArray); //array format 

//slice ,splice

console.log("A" , myArray);
const myn1 = myArray.slice(1,3); //include 1, 2 not 3

console.log(myn1);
console.log("B" , myArray); // 1,2

const myn2 = myArray.splice(1,3); 
console.log("C" , myArray);
console.log(myn2); //1,2,3
