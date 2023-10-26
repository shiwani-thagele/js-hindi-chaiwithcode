const heros = ["thor" , "iron-man","spider-man"];
const dc = ["superman", "flash","batman"];

//psuh()
// heros.push(dc) //same array


//concat()
//  const heros2 = heros.concat(dc) //return new array,limitation only take one value
// console.log(heros2);

//spread syntax
const allHeros = [...heros,...dc]; //take multiple values
//console.log(allHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,6]]];

//flate()
const another_array_usable = another_array.flat(Infinity); //alll array in same format
console.log(another_array_usable);


 //isArray()
console.log(Array.isArray("shiwani")) //check for is array or not

//from()
console.log(Array.from("shiwani"));//convert into array
console.log(Array.from({name:"shiwani"}));//key:value || multiple values can be given , return empty array => [],interesting

let score1 =100;
let score2= 200
let score3 = 300

//of()
console.log(Array.of(score1,score2,score3)); //convert into array





