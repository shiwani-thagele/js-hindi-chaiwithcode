const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
//console.log(Math.PI);

//const myobject = Object.create(null)

const chai ={
    name:"ginger chai",
    price:250,
    isAvaialble: true,

    orderChai : function(){
        console.log("chai nahi bani");
    }
}
//console.log(chai);
//console.log(Object.getOwnPropertyDescriptor(chai,"name")); //undefined
Object.defineProperty(chai,'name',{
    //writable:false,
    enumerable:true //if it is false we did not get name coz of iteration block
}) 
 console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//objecta is not iterable, so we have to use entries for this scenario there are more properties about iterable of object ,they are used by different scenio
for (let [key,value] of Object.entries(chai)) {
    if(typeof(value) != 'function'){
    console.log(`${key}:${value}`);
    }
}
    
