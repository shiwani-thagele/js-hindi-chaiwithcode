//for-of loop

//Array specific loops 
// ["","",""]
// [{},{},{}]
//iterator -array,string, object in case of for of iteratr of  object 
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// const str = "hello world!"
// for (const greet of str) {
//     console.log(`each char is ${greet}`);
// }

//maps - unique values ,like arrays but .....

const  map = new Map()
map.set('mp',"states")
map.set('up',"states")
map.set('delhi',"states")
map.set('gujrat',"states")
map.set('rajesthan',"states")

//console.log(map,"states");

for (const [key,value] of map) {
    //console.log(key,':-',value);
}
const myobject ={
    'game1':'nfs',
    'game2':'spiderman'
}
// for (const [key,value] of myobject) {
//    // console.log(key,':-',value); //myobject is not iterable
// }
