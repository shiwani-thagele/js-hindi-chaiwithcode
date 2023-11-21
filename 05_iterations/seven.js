//map
const mynums = [1, 2,3,4,5,6,7,8,9,10]

//const newnum = mynums.map((num)=> num + 10)  //automatically return value 
// OR mynums.map((num) => {return num + 10 })


//chaining 
const newnum = mynums
                     .map((num) => num * 10) 
                     .map((num) => num + 1)
                     .filter((num) => num >= 40 && num <= 95)
console.log(newnum);


