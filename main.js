const rows = 3;
const cols = 3;

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

const instructions = document.getElementById('instructions');
const playagain = document.getElementById('playagain');

playagain.addEventListener("click", eventListener);

var player1 = {
    symbol: 'X',
    position: ''
}

var player2 = {
    symbol: 'O',
    position: ''
}


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
        r1c1.innerText = gameBoard.array.at(0);
        r1c2.innerText = gameBoard.array.at(1);
        r1c3.innerText = gameBoard.array.at(2);
        r2c1.innerText = gameBoard.array.at(3);
        r2c2.innerText = gameBoard.array.at(4);
        r2c3.innerText = gameBoard.array.at(5);
        r3c1.innerText = gameBoard.array.at(6);
        r3c2.innerText = gameBoard.array.at(7);
        r3c3.innerText = gameBoard.array.at(8);
        backgroundColors();
    },
    checkIfWinner(symbol) {
        const THE_WINNER_IS = 'The Winner is ' + symbol;
        if (gameBoard.array.at(0) == symbol && gameBoard.array.at(1) == symbol && gameBoard.array.at(2) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(3) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(5) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(6) == symbol && gameBoard.array.at(7) == symbol && gameBoard.array.at(8) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(0) == symbol && gameBoard.array.at(3) == symbol && gameBoard.array.at(6) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(1) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(7) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(2) == symbol && gameBoard.array.at(5) == symbol && gameBoard.array.at(8) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(0) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(8) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(2) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(6) == symbol) {
            removeBoardListeners();
            return THE_WINNER_IS;
        }
        if (gameBoard.array.at(0) != '' && gameBoard.array.at(1) != '' && gameBoard.array.at(2) != '' && gameBoard.array.at(3) != '' && gameBoard.array.at(4) != '' && gameBoard.array.at(5) != '' && gameBoard.array.at(6) != '' && gameBoard.array.at(7) != '' && gameBoard.array.at(8) != '') {
            removeBoardListeners();
            return "It's a draw!";
        }
        
        else {
            if (gameBoard.currentPlayer == 1) { return `Player 2 : choose a position` }
            else { return `Player 1 : choose a position` };
        } 
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