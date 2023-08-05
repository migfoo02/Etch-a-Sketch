const grid = document.querySelector('.grid-container');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let squareSize = 8;

createGrid(squareSize);

function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

function createGrid(gridSize) {
  const gridArea = gridSize * gridSize;
  for (let i = 0; i < gridArea; i++) {
    grid.appendChild(createDiv(grid.clientWidth / gridSize));
  }
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

function shadeBox(e) {
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
}

function changeGridSize(e) {
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
}

gridSize.addEventListener('input', changeGridSize);

grid.addEventListener('mouseover', shadeBox);

applyGridSize.addEventListener('click', reset)

resetBtn.addEventListener('click', reset);