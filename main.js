'use strict';
// get the box element
const box1 = document.querySelector('.boxOne');
const box2 = document.querySelector('.boxTwo');

// get the score element
const score  = document.querySelector('.score');

let totalscore = 300;

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

// when page is loaded, change give the box1 a random color
addEventListener('load', function (event) {
  r = Math.trunc(Math.random() * 256);
  g = Math.trunc(Math.random() * 256);
  b = Math.trunc(Math.random() * 256);

  box1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

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
  slidertextopacity.textContent = event.target.value / 1000;
});

// change the value of the slider with the side buttons - and + red color
document.querySelector('.redmin').addEventListener('click', function() {
  let answer = slidervaluered.value -= 1;
  slidertextred.textContent = answer;
  console.log(slidervaluered.value); 
});

document.querySelector('.redplus').addEventListener('click', function() {
  let answer = slidervaluered.value += 1;
  slidertextred.textContent = answer;
  console.log(slidervaluered.value); 
});

// change the value of the slider with the side buttons - and + green color
document.querySelector('.greenmin').addEventListener('click', function() {
  console.log(slidervaluegreen.value);
  slidertextgreen.textContent = slidervaluegreen.value -= 1;
});

document.querySelector('.greenplus').addEventListener('click', function() {
  console.log(slidervaluegreen.value);
  slidertextgreen.textContent = slidervaluegreen.value += 1;
});

// change the value of the slider with the side buttons - and + blue color
document.querySelector('.bluemin').addEventListener('click', function() {
  console.log(slidervalueblue.value);
  slidertextblue.textContent = slidervalueblue.value --;
});

document.querySelector('.blueplus').addEventListener('click', function() {
  console.log(slidervalueblue.value);
  slidertextblue.textContent = slidervalueblue.value ++;
});

// change the value of the slider with the side buttons - and + opacity color
document.querySelector('.opacitymin').addEventListener('click', function() {
  console.log(slidervalueopacity.value);
  slidertextopacity.textContent = slidervalueopacity.value -- / 1000;
});

document.querySelector('.opacityplus').addEventListener('click', function() {
  console.log(slidervalueopacity.value);
  slidertextopacity.textContent = slidervalueopacity.value ++ / 1000;
});

// get value of the backgroundcolor of the 
// let box2bg = window.getComputedStyle(box2).backgroundColor;

// change the color value when there is an input
addEventListener('input', function (event) {
  box2.style.backgroundColor = `rgb(${slidertextred.textContent}, ${slidertextgreen.textContent}, ${slidertextblue.textContent}, ${slidertextopacity.textContent})`;
});

// when clicked change the box1 color to a random color.
document.querySelector('#next').addEventListener('click', function () {
  r = Math.trunc(Math.random() * 256);
  g = Math.trunc(Math.random() * 256);
  b = Math.trunc(Math.random() * 256);

  box1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// when guess is clicked this checks if its the same as the random color.
document.querySelector('#guess').addEventListener('click', function () {
  if(r === slidervaluered.value && g === slidervaluegreen.value && b === slidervalueblue){
    totalscore = 300;
    score.textContent = totalscore;
  }

  score.textContent = 300;


  console.log(r);
  console.log(g);
  console.log(b);
  console.log(slidervaluered.value);
  console.log(slidervaluegreen.value);
  console.log(slidervalueblue.value);
  console.log(slidervalueopacity.value);
});
