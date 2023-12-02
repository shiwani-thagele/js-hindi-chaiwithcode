//1.convert array to object 

const arr= ['a','b','c'];
let object = arr.reduce((accumulatr,currentElement,indexOfCurrentElement) =>
    ({...accumulatr,[indexOfCurrentElement]:currentElement}),{}
)
//console.log(object);

//OR using for loop

const array = ['a','b','c']
let object2 = {};
for(let i=0; i<array.length;i++){
    object2[i]= array[i];
}
//console.log(object2);

//OR using forEach loop 

const array2 = ["a","v","b"];
let object3 = {};
array2.forEach((value,index)=>{
    object3[index]= value;
});
//console.log(object3);


//2. scopes tricky question

(function (){
    var x,y;
    try{
        throw new Error();
    }catch(x){
        x=1; 
        y=2;
        //console.log(x);//1
    }
    //console.log(x);//undefined
    //console.log(y); //2
})();

//3.Hoisting

x =5;
var x ;
//console.log(x);

//var y =1;
var call = function(){
    //console.log(y);
    var y =2;
}
call()

// for(let i=0; i< 5; i++){ => 0,1,2,3,4
    for(var i=0; i< 5; i++){
    setTimeout(function(){
       // console.log(i); //5,5,5,5,5
    },i*1000);
}


//4.Array construtor from method 
//we can convert a string => array || set => array || array to map 
const b = Array.from('hello'); //['h','e','l','l','o']
//console.log(b);
let s = new Set([1,2]);
//console.log(typeof(s));

const arr0 = [1,2,3,4,5];
const a1 = Array.from(arr0,it=>it*2); //[2,4,6,8,10]
//console.log(a1);

const a = Array.from({length:5},(it,i)=> i*2); //[0,2,4,6,8] if use 3 then we will get odd series.
//console.log(a);

//5. ARROW FUNCTION VS NORMAL FUNCTION

function say(){
    return this.name;
}

const tell = () =>{
    return this.name;
}

const person = {
    name:'shivi',
    age:23,
    tell,
    say
}

console.log(person.say());//shivi
console.log(person.tell());//undefined