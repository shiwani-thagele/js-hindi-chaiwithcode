//Math.random()
let randomNumber = parseInt(Math.random() * 100 + 1);

const sumbit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowORhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  sumbit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //valid number
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a  Number more than 1 ');
  } else if (guess > 100) {
    alert('Please enter a  Number less than 100 ');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      guessDisplay(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      guessDisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check valid guess
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function guessDisplay(guess) {
  //values clean  , arrays update
  UserInput.value = '';
  guessSlot.innerHTML += `${guess} , `; //push guesses
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //interact with dom ,user input value will be empty for next guesss, guess add to  innerhtml , numbers will be less
  lowORhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGmaeButton = document.querySelector('#newGame')
  newGmaeButton.addEventListener('click' , function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    UserInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true 

  })
}