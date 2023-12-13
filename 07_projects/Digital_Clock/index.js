const clock = document.getElementById('clock')
//document.querySelector('#clock')

setInterval(function(){
  let date =  new Date()
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString()
},1000);


//syntax of setInterval(function(){},timeforLimit)
//setInterval(function(){},1000)