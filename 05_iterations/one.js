//for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
for (let i = 0; i <= 10; i++) {
    const element =i;
    if(element == 6){
        //console.log("6 is best number");
    }
    //console.log(element);
    
}
//console.log(element);//erro scope 

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop : ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     //console.log(`inner loop : ${j} and outer loop : ${i} `);
//     console.log(i + '*' + j + ' = ' + i*j);
//   }
    
// // }

// let myarray = ["flash","batmen","superman"];
// //console.log(myarray.length);
// for (let index = 0; index < myarray.length; index++) {

//     const element = myarray[index];
//     //console.log(element);
// }


// break  and continue 

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        //break;
        continue //skipe value of 5 and continue 
    }
   console.log(`value of i is : ${i}`);

    
}