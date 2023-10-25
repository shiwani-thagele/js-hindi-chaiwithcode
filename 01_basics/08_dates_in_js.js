//=================== DATE ==============
let myDate =  new Date()

/*
//output => Wed Oct 25 2023 13:32:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString()); //date object

//output => 2023-10-25T13:32:16.920Z
console.log(myDate.toISOString());

//output => Wed Oct 25 2023
console.log(myDate.toDateString());

//output => 10/25/2023
console.log(myDate.toLocaleDateString());

//object
console.log(typeof myDate); //object

*/

let createdDate = new Date(2023,8,4)

//2023-09-04T00:00:00:000Z
console.log(createdDate);

//output => 9/4/2023
console.log(createdDate.toLocaleDateString());

//output => Mon Sep 04 2023
console.log(createdDate.toDateString());

let createdDate2 = new Date(2023,0,23,5,8)
//1/23/2023 , 5:08:00 AM 
console.log(createdDate2.toLocaleString());



let createdDate3 = new Date("2023-02-14")
//2/14/2023, 12:00:00 AM YY-MM-DD
console.log(createdDate3.toLocaleString());

let createdDate4 =  new Date("01-14-2023")
//1/14/2023, 12:00:00 AM
console.log(createdDate4.toLocaleString());

let myTimeStamp = Date.now()
//mili second - 1608241603770 between 1970 - present
/* console.log(myTimeStamp);
console.log(createdDate4.getTime()); */

//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() +1);

newDate.toLocaleString('default' ,{ 
    //cntr+space
    weekday: "long"
    //timeZone:'also'
})



