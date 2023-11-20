//reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


const mynums = [1,2,3,4]
// const mytotal = mynums.reduce(function(acc,currval){
//     console.log(`accumulator ${acc} and current value ${currval}`);
//     return acc + currval
// },0)
// console.log(mytotal);


const mytotal = mynums.reduce( (acc,cuu) =>  acc+cuu , 0)
//console.log(mytotal);

const shoppingCard = [
    {
        itemname : "js course",
        price : 2999
    },
    {
        itemname : "datascience course",
        price : 12999
    },
    {
        itemname : "python course",
        price : 5000
    },
    {
        itemname : "android course",
        price : 6788
    },
]

 const result = shoppingCard.reduce((accum,item)=> accum + item.price,0)
 console.log(result);