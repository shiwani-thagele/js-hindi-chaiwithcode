//convert array to object 

const arr= ['a','b','c'];
let object = arr.reduce((accumulatr,currentElement,indexOfCurrentElement) =>
    ({...accumulatr,[indexOfCurrentElement]:currentElement}),{}
)
console.log(object);

//OR using for loop

const array = ['a','b','c']
let object2 = {};
for(let i=0; i<array.length;i++){
    object2[i]= array[i];
}
console.log(object2);

//OR using forEach loop 

const array2 = ["a","v","b"];
let object3 = {};
array2.forEach((value,index)=>{
    object3[index]= value;
});
console.log(object3);