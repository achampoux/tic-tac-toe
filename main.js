const instructions = document.getElementById('instructions');
const playagain = document.getElementById('playagain');

const rows = 3;
const cols = 3;
var player1 = { symbol: 'X', position: '' };
var player2 = { symbol: 'O', position: '' };

function addListeners() {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const element = document.getElementById(`r${i}c${j}`);
            element.addEventListener("click", eventListener);
        }
    }
}

function removeBoardListeners() {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const element = document.getElementById(`r${i}c${j}`);
            element.removeEventListener("click", eventListener);
        }
    }
}

addListeners();

playagain.addEventListener("click", eventListener);


function eventListener(e) {
    var position = e.target.getAttribute('id');
    switch (position) {
        case 'r1c1':
            position = 0
            r1c1.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r1c2':
            position = 1
            r1c2.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r1c3':
            position = 2
            r1c3.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r2c1':
            position = 3
            r2c1.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r2c2':
            position = 4
            r2c2.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r2c3':
            position = 5
            r2c3.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r3c1':
            position = 6
            r3c1.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r3c2':
            position = 7
            r3c2.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'r3c3':
            position = 8
            r3c3.removeEventListener("click", eventListener);
            gameFlow(position);
            break;
        case 'playagain':
            gameBoard.reset();
            break;
    }
}

const gameBoard = {
    array : ['','','','','','','','',''],
    currentPlayer : 1,
    switch() {
        if (gameBoard.currentPlayer == 1) { gameBoard.currentPlayer = 2 }
        else { gameBoard.currentPlayer = 1 };
    },
    add(player){
        gameBoard.array.splice(player.position,1,player.symbol);
    },
    draw() {
        let index = 0;
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                const cell = document.getElementById(`r${i}c${j}`);
                cell.innerText = gameBoard.array.at(index++);
            }
        }
        backgroundColors();
    },
    checkIfWinner(symbol) {
        const THE_WINNER_IS = 'The Winner is ' + symbol;

        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const combination of winningCombinations) {
            if (combination.every(index => gameBoard.array.at(index) === symbol)) {
                removeBoardListeners();
                return THE_WINNER_IS;
            }
        }

        if (gameBoard.array.every(cell => cell !== '')) {
            removeBoardListeners();
            return "It's a draw!";
        }

        return (gameBoard.currentPlayer === 1) ? 'Player 2 : choose a position' : 'Player 1 : choose a position';
    },
    reset() {
        player1.position = '';
        player2.position = '';
        gameBoard.currentPlayer = 1;
        gameBoard.array.length = 0;
        gameBoard.array = ['', '', '', '', '', '', '', '', ''];
        gameBoard.draw();
        instructions.innerText = 'Player 1 : choose a position';
        addListeners();
    }
}

function gameFlow(position) {
    const player = 'player' + gameBoard.currentPlayer;
    window[player].position = position;
    gameBoard.add(window[player]);
    gameBoard.draw();
    instructions.innerText = gameBoard.checkIfWinner(window[player].symbol);
    gameBoard.switch();
}

function backgroundColors() {
    var elements = document.querySelectorAll('table.tic-tac-toe td');

    for (var i = 0; i < elements.length; i++) {
        var value = elements[i].innerText || elements[i].textContent;

        if (value === 'X') {
            elements[i].style.backgroundColor = '#FF0000';
        } else if (value === 'O') {
            elements[i].style.backgroundColor = '#00FF00';
        } else {
            elements[i].style.backgroundColor = '#fff';
        }
    }
}