const form = document.querySelector('form');
//if we define const height = parseInt(document.querySelector('#height').value)  outside then it will give you empty values first to prevent from this conition we use indide addEvenListerners.

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  let bmi;
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = ` Please enter a valid height ${height}`;
  }
  // results.innerHTML = `${height}`;
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = ` Please enter a valid weight ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  //the given assignment 
  if (bmi < 18.6) {
    results.innerHTML += `BMI Weight is Under Weight ${bmi} `;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML += `BMI Weight is Normal Range ${bmi} `;
  } else {
    results.innerHTML += `BMI Weight is Overweight ${bmi} `;
  }
});
