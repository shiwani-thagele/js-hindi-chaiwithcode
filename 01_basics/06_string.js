const name = "shiwani"
const countRepo =38;

//console.log(name + countRepo);

console.log(`hello my name is ${name} and my total repositories is ${countRepo}`); //modern way and used commonly

const nameGame =  new String('mindcraft-mc');
console.log(nameGame);

//index
console.log(nameGame[0]);
console.log(nameGame.__proto__);

//Lenght()
console.log(nameGame.length);


//toLocalUpperCase()
console.log(nameGame.toLocaleUpperCase());


//charAt()
console.log(nameGame.charAt(6));


//indexof()
console.log(nameGame.indexOf('c')); 


//Substring()
const newString = nameGame.substring(0,6)// it also take negative valur but not suggested
console.log(newString); // last index not include



//Slice()
const nextString = nameGame.slice(-10,4)
console.log(nextString); //reverse


//Trim()
const newString2 = "    shiwani   "
console.log(newString2);
console.log(newString2.trim()); //remove spaces but not remove spaces present b/w string


//Replace()
const url = "https://shivi.com/shiwani@95";
console.log(url.replace('@95','%95'));


//Includes()
console.log(url.includes('shiv'));

//Split()
console.log(nameGame.split('-')); //split basis on - return array
