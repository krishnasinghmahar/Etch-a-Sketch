const GRIDSIDE = 500;
let squarePerSide = 16;


const sketchArea = document.querySelector('#sketch-area');
const sliderContainer = document.querySelector('#slider-container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
    this.style.backgroundColor = 'black';
}


function createGridCells(squarePerSide) {
    const numOfSquare = (squarePerSide * squarePerSide);
    const widthOrHeight = `${(GRIDSIDE / squarePerSide) - 2}px`;

    for (let i = 0; i < numOfSquare; i++) {
        const gridCells = document.createElement('div');
        gridCells.style.width = gridCells.style.height = widthOrHeight;
        gridCells.classList.add('cell');

        sketchArea.appendChild(gridCells);

        gridCells.addEventListener('mouseover', setBackgroundColor);
    }
}

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

slider.oninput = function () {
    squarePerSide = this.value;
    sliderValue.textContent = `${this.value} x ${this.value}(Resolution)`;
    removeGridCells();
    createGridCells(squarePerSide);
}

createGridCells(16);
