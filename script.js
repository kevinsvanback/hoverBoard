'use strict'

// DOM selector
const container = document.querySelector('.container');

// Random colors
const colors = ['#00A5E3', '#FC6238', '#FFEC59', '#4DD091', '#C05780'];

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
  const color = getRandomColor();
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// Set color to default
function removeColor(e) {
  e.style.background = '#333';
  e.style.boxShadow = '0 0 2px #000';
}

// Get random color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}