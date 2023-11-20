//for-each loop , higher order functions

const coding = ["js","py","rb","java","cpp"]

// coding.forEach( function (val){
//      console.log(val);
// })




//callback function
// coding.forEach((val)=>{
// console.log(val);
// })





// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)




// coding.forEach((item , index,arr)=>{
//    console.log(item,index,arr);
// })


const mycoding = [
    {
        languageName:"javascript",
        languageFilename:'js'
    },
    {
        languageName:"python",
        languageFilename:'py'
    },
    {
        languageName:"java",
        languageFilename:'java'
    },
    {
        languageName:"c++",
        languageFilename:'cpp'
    },
]

mycoding.forEach((item)=>{
    //{key,value}
//    console.log(item.languageName);
//    console.log(item.languageFilename);
console.log(`language file name: ${item.languageFilename} , language name:${item.languageName}`);
})