//create grid cells

const GRIDSIDE = 550;
const cells = [];

const sketchArea = document.querySelector('#sketch-area');
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;


function createGridCells(squarePerSide) {
    const numOfSquare = (squarePerSide * squarePerSide);
    const widthOrHeight = `${(GRIDSIDE / squarePerSide)}px`;

    for (let i = 0; i < numOfSquare; i++) {
        const gridCells = document.createElement('div');
        gridCells.style.width = gridCells.style.height = widthOrHeight;
        gridCells.classList.add('cell');

        sketchArea.appendChild(gridCells);

        cells.push(gridCells);

        gridCells.addEventListener('mouseover', getPenColor);
    }
}


function getPenColor() {
    if (pen) {
        this.style.backgroundColor = setPenColor;
        this.style.opacity = 1;
    } else if (rainbow) {
        this.style.backgroundColor = randomColor();
        this.style.opacity = 1;
    } else if (eraser) {
        this.style.opacity = 0;
    } else if (shading) {
        this.style.backgroundColor = 'rgb(0,0,0)';
        if (this.style.opacity == 1) {
            this.style.opacity = 0.1;
        }
        const currentOp = +this.style.opacity;
        this.style.opacity = +currentOp + 0.1;
    }
}


//select shade

const shadeBtn = document.querySelector('#shade');




//select pen color

const penBtn = document.querySelector('#pen-color');
let setPenColor = 'black';

let pen = true;
penBtn.oninput = (c) => {
    eraserBtn.style.backgroundColor = 'azure';
    shadeBtn.style.backgroundColor = 'azure';
    rainbowBtn.style.backgroundColor = 'azure';
    pen = true;
    eraser = false;
    rainbow = false;
    shading = false;

    return setPenColor = c.target.value;
}



// select rainbow color

const rainbowBtn = document.querySelector('#rainbow-mode');



function randomColor() {

    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}



//change grid size

const sliderContainer = document.querySelector('#slider-container');
const sliderValue = document.querySelector('#slider-value');

sliderValue.textContent = `Grid Size : ${slider.value} x ${slider.value} `;

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

let squarePerSide = 16;

slider.oninput = function () {
    squarePerSide = this.value;
    sliderValue.textContent = `Grid Size : ${this.value} x ${this.value}`;
    removeGridCells();
    createGridCells(squarePerSide);
    toggle = true;
    gridTg();
}



//clear button

const clear = document.querySelector('#clear');

clear.onclick = () => {
    removeGridCells();
    createGridCells(squarePerSide);
    if (!toggle) {
        gridTg();
    }
}



// toggle grid

const gridToggle = document.querySelector('#grid');

let toggle = true;
gridToggle.onclick = () => { gridTg() };
function gridTg() {
    if (toggle) {
        cells.forEach((e) => {
            e.style.border = ' 1px solid pink';
        });
        gridToggle.style.backgroundColor = 'yellow';
        toggle = false;
    } else {
        if (!toggle) {
            cells.forEach((e) => {
                e.style.border = 'none';
            });
            gridToggle.style.backgroundColor = 'white';
            toggle = true;
        }
    }
}



//select background Color

const bgColor = document.querySelector('#bg-color');
let setBgColor = '#FFFFFF';

bgColor.oninput = (c) => {
    setBgColor = c.target.value;
    sketchArea.style.backgroundColor = setBgColor;
}



//select eraser

const eraserBtn = document.querySelector('#eraser');



// toggle buttons


//eraser

let eraser = false;
eraserBtn.onclick = () => {
    eraserBtn.style.backgroundColor = 'yellow';
    shadeBtn.style.backgroundColor = 'azure';
    rainbowBtn.style.backgroundColor = 'azure';
    pen = false;
    rainbow = false;
    eraser = true;
    shading = false;
}


//shade

let shading = false;
shadeBtn.onclick = () => {
    eraserBtn.style.backgroundColor = 'azure';
    shadeBtn.style.backgroundColor = 'yellow';
    rainbowBtn.style.backgroundColor = 'azure';
    shading = true;
    rainbow = false;
    pen = false;
    eraser = false;
}



//rainbow
let rainbow = false;
rainbowBtn.onclick = () => {
    eraserBtn.style.backgroundColor = 'azure';
    shadeBtn.style.backgroundColor = 'azure';
    rainbowBtn.style.backgroundColor = 'yellow';
    pen = false;
    rainbow = true;
    eraser = false;
    shading = false;
}



createGridCells(16);
