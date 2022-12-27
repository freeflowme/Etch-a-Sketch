//create 256 <div>s for original 16x16 grid
const container = document.querySelector('#container');
let x;
for(let x = 0; x < 256; x++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = 'gridSquare';
    document.querySelector('#container').appendChild(gridSquare);
}

//color <div>s blue upon mouseover
const gridSquares = document.querySelectorAll('.gridSquare');
/*
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.style.backgroundColor = 'blue';
    })
})
*/
//upon button click, prompt user input for new grid size, remove old grid, replace with new
const newGridBtn = document.querySelector('#newGridBtn');
    newGridBtn.addEventListener('click', () => {
        const userChoice = prompt("Squres per side in new grid (1-99):");
        if(isNaN(userChoice)) {
            alert("Please enter numbers between 1 and 99!");
        } else if(userChoice <= 1 || userChoice >= 99) {
            alert("Please keep your entry between 1 and 99!");
        } else if(userChoice >= 1 && userChoice <= 99) {
            while(container.firstChild)
                container.firstChild.remove();
            let y;
            for(let y = 0; y < (userChoice * userChoice); y++) {
                const newGridSquare = document.createElement('div');
                newGridSquare.className = 'newGridSquare';
                document.querySelector('#container').appendChild(newGridSquare);
            const newGridSquares = document.querySelectorAll('.newGridSquare');
            newGridSquares.forEach(newGridSquare => {
                newGridSquare.style.width = `${100/userChoice}%`;
                newGridSquare.style.height = 'auto';
            })
            newGridSquares.forEach(newGridSquare => {
                newGridSquare.addEventListener('mouseover', () => {
                    newGridSquare.style.backgroundColor = 'red';
                })
            })
            }
        }   
    })


//random color generator
function randomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let color = 'rbg(' + x + ',' + y + ',' + z + ')';

    gridSquare.style.backgroundColor = color;
}

//add 10% black gradient to <div>s upon mouseover
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', (event) => {
        const currentBackground = window.getComputedStyle(event.target).
            getPropertyValue('background-color');
        console.log(currentBackground);
        const [red, green, blue, alpha] = currentBackground.match(/(\d*\.?\d*)/g).map(Number);
        console.log([red, green, blue, alpha]);
        event.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha+0.1})`;
    })
})