'use strict'

// DOM selector
const container = document.querySelector('.container');

// Random number
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Random rgb color
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// Max squares
const SQUARES = 500;

// Add/remove new square on mouseover
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

// Set random color
function setColor(e) {
  const color = randomColor();
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Set color to default
function removeColor(e) {
  e.style.background = '#333';
  e.style.boxShadow = '0 0 2px #000';
}