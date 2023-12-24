//Async JS Programming
//Callbacks, Promises , Async & Await

//array of object
const datats=[
    {name:"shiwani",profession:"software developer"},
    {name:"birla",profession:"software developer"}
];

function getDatas(){
   setTimeout(()=>{
    let output="";
      datats.forEach((data,index)=>{
    output+= `<li>${data.name}</li>`
      })
      document.body.innerHTML=output
   },1000)
}



function createData(newdata,callback) {
     setTimeout(()=>{
        datats.push(newdata)
        callback()
     },2000)
}
createData({name:"vivek",profession:"software developer"},getDatas())
// getDatas()