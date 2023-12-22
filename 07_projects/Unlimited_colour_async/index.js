//how to random colour generate

//generate a random colour
const randomColor = function () {
    const hexCode = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
      colour += hexCode[Math.floor(Math.random() * 16)];
    }
    return colour;
  };
  //console.log(Math.random() * 16);
  //console.log(Math.floor(Math.random() * 16))
  // console.log(randomColor())
  let intervalId;
  const startChanginColor = function () {
    //edge cases
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChanginColor = function () {
    clearInterval(intervalId);
    //edge cases
    intervalId = null; //flush-out derefernece
  };
  
  document.querySelector('#start').addEventListener('click', startChanginColor);
  
  document.querySelector('#stop').addEventListener('click', stopChanginColor);