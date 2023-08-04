
function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {
    const gameContainer = document.getElementById('grid-container');
  
    gameContainer.innerHTML = '';
  
    gameContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
    gameContainer.classList.add(cssClass);
  
    for (let i = 0; i < size; i += 1) {
      const div = document.createElement('div');
      gameContainer.appendChild(div);
    }
  }

generateGrid();