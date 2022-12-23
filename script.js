const container = document.querySelector('#container');

for(x>0; x<256; x++) {
    const gridSquare = document.createElement('div');
    gridSquare.className = 'gridSquare';

    gridSquare.border = '1px solid black';

    document.querySelector('#container').appendChild(gridSquare);
}