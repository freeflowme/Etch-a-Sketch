//create 256 <div>s for 16x16 grid
const container = document.querySelector('#container');
let x
for(let x = 0; x < 256; x++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = 'gridSquare';
    document.querySelector('#container').appendChild(gridSquare);
}

//color <div>s blue upon mouseover
const gridSquares = document.querySelectorAll('.gridSquare');
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', function() {
        gridSquare.style.backgroundColor = 'blue';
    })
})






//first attempt at code to color all <div>s blue
/*
document.querySelector('.gridSquare').addEventListener('mouseover', function() {
    document.querySelector('.gridSquare').style.backgroundColor = 'blue';
})
*/ 

//second attempt at code to color all <div>s blue
/*
document.querySelectorAll('.gridSquare').addEventListener('mouseover', mouseOver);

function mouseOver() {
    document.querySelectorAll('.gridSquare').style.backgroundColor = "blue";
}
*/