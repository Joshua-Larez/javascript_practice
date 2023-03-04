'use strict';


/* 
Variables 
*/


// get the box element
const box1 = document.querySelector('.boxOne');
const box2 = document.querySelector('.boxTwo');

// get the score element
let score  = document.querySelector('.score');
let scorecss = document.querySelector('.scorecss');

// get the live value element 
const slidertextred = document.getElementById('slidervaluered');
const slidertextgreen = document.getElementById('slidervaluegreen');
const slidertextblue = document.getElementById('slidervalueblue');
const slidertextopacity = document.getElementById('slidervalueopacity');

// get the sliders value element
let slidervaluered = document.querySelector('.redcolorvalue');
let slidervaluegreen = document.querySelector('.greencolorvalue');
let slidervalueblue = document.querySelector('.bluecolorvalue');
let slidervalueopacity = document.querySelector('.opacitycolorvalue');

// the colors of the box1 
let r,g,b;

// opacity global value
let opacity_value = slidervalueopacity.value;

// a function to update the colors when they have to be updated for box2
function updatebox2colors(r,g,b,o){
  box2.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${o / 1000})`;
}

/* 
Global Events
*/


// when page is loaded, change give the box1 a random color
addEventListener('load', function (event) {
  r = Math.trunc(Math.random() * 256);
  g = Math.trunc(Math.random() * 256);
  b = Math.trunc(Math.random() * 256);

  box1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

// change the color value when there is an input in the sliders
addEventListener('input', function () {
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

// change the color when there is an change in an html
addEventListener('change', function () {
  slidervalueopacity.value = opacity_value;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});


/* 
Specific Events
*/


// take the value of the slider from the red color and change the value of the text on the right in the app
slidervaluered.addEventListener('input', function (event) {
  slidertextred.textContent = event.target.value;
});

// take the value of the slider from the green color and change the value of the text on the right in the app
slidervaluegreen.addEventListener('input', function (event) {
  slidertextgreen.textContent = event.target.value;
});

// take the value of the slider from the blue color and change the value of the text on the right in the app
slidervalueblue.addEventListener('input', function (event) {
  slidertextblue.textContent = event.target.value;
});

// take the value of the slider from the blue color and change the value of the text on the right in the app
slidervalueopacity.addEventListener('input', function (event) {
  opacity_value = event.target.value;
  slidertextopacity.textContent = event.target.value / 1000;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

// change the value of the slider with the side buttons - and + red color
document.querySelector('.redmin').addEventListener('click', function() {
  slidertextred.textContent = slidervaluered.value --;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

document.querySelector('.redplus').addEventListener('click', function() {
  slidertextred.textContent = slidervaluered.value ++;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

// change the value of the slider with the side buttons - and + green color
document.querySelector('.greenmin').addEventListener('click', function() {
  slidertextgreen.textContent = slidervaluegreen.value --;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

document.querySelector('.greenplus').addEventListener('click', function() {
  slidertextgreen.textContent = slidervaluegreen.value ++;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

// change the value of the slider with the side buttons - and + blue color
document.querySelector('.bluemin').addEventListener('click', function() {
  slidertextblue.textContent = slidervalueblue.value --;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

document.querySelector('.blueplus').addEventListener('click', function() {
  slidertextblue.textContent = slidervalueblue.value ++;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

// change the value of the slider with the side buttons - and + opacity color
document.querySelector('.opacitymin').addEventListener('click', function() {
  opacity_value --;
  slidervalueopacity.value = opacity_value;
  slidertextopacity.textContent = opacity_value / 1000;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

document.querySelector('.opacityplus').addEventListener('click', function() {
  opacity_value ++;
  slidervalueopacity.value = opacity_value;
  slidertextopacity.textContent = opacity_value / 1000;
  updatebox2colors(slidervaluered.value, slidervaluegreen.value, slidervalueblue.value, opacity_value);
});

// get value of the backgroundcolor of the 
// let box2bg = window.getComputedStyle(box2).backgroundColor;

// when clicked change the box1 color to a random color.
document.querySelector('#next').addEventListener('click', function () {
  r = Math.trunc(Math.random() * 256);
  g = Math.trunc(Math.random() * 256);
  b = Math.trunc(Math.random() * 256);

  box1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// when guess is clicked this checks if its the same as the random color.
// credits to chatgpt for this formula for the guessing button. 
document.querySelector('#guess').addEventListener('click', function () {
  const delta1 = Math.abs(r - slidervaluered.value);
  const delta2 = Math.abs(g - slidervaluegreen.value);
  const delta3 = Math.abs(b - slidervalueblue.value);

  const total_delta = delta1 + delta2 + delta3;
  const max_delta = 3 * 255; // max possible difference between sliders
  let finalscore = Math.round((1 - total_delta / max_delta) * 100);

  // color changes are all me.
  if (finalscore >= 60) {
    score.textContent = finalscore
    scorecss.style.backgroundColor = 'green';
  }
  else if (finalscore >= 50 && finalscore <= 60) {
    score.textContent = finalscore
    scorecss.style.backgroundColor = 'orange';
  }
  else if (finalscore < 50) {
    score.textContent = finalscore
    scorecss.style.backgroundColor = 'red';
  }
});

