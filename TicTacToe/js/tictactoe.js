//Keeps track of whose turn it is.
activePlayer = 'X';
//Store an array of moves. Used to determine win conditions.
let selectedSquares = [];

//Place an x or o in a square.
function placeXOrO(squareNumber) {
    //Ensure the square hasn't been selected already.
    //.some() method is used to check each element of the array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //Retrieve the HTML element id that was clicked on.
        let select = document.getElementById(squareNumber);
        //Check whose turn it is
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url(images/x.png)';
        } else {
            select.style.backgroundImage = 'url(images/o.png)';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //Call a function to check for win conditions.
        checkWinConditions();
        //Condition to changing the active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./media/place.mp3');
        if(activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computerTurn(); }, 1000);
        }
        return true;
    }

    //Select a random square
    function computerTurn() {
        let success = false;
        let pickASquare;
        //While loop keeps trying if random square is already chosen.
        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

//Parse the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    //Check for a tie
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 1000);
    }
}

//Checks for 3 strings in an array,
//used to check for each win condition.
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true) { return true; }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//Use html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    //Starting coordinates for win line.
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    

    //Interacts with the Canvas
    function animateLineDrawing() {
        //Creates the loop for when the game ends
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);   //starting point
        c.lineTo(x, y);     //end point
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        //check if we have reached the end point.
        if(x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10;}
            if (y < y2) { y += 10;} 
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //Needed for the 6, 4, 2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x <x2) { x += 10;}
            if (y > y2) { y += 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); };
        }
    }

    //clears canvas after our win line is drawn.
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function() {clear(); resetGame(); }, 1000);
}
//Resets the game in a tie or a win.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';      //Remove background images.
    }
    selectedSquares = []; //Clear array.
}
