const gameBoard = {
    array : [0,1,2,3,4,5,6,7,8],
    add(player){
        gameBoard.array.splice(player.position,1,player.symbol);
    },
    draw() {
        row1 = gameBoard.array.slice(0, 3);
        row2 = gameBoard.array.slice(3, 6);
        row3 = gameBoard.array.slice(6, 9);
        return [row1, row2, row3];
    },
    checkIfWinner(symbol) {
        if (gameBoard.array.at(0) == symbol && gameBoard.array.at(1) == symbol && gameBoard.array.at(2) == symbol) {
            return symbol;
        }
        if (gameBoard.array.at(3) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(5) == symbol) {
            return symbol;
        }
        if (gameBoard.array.at(6) == symbol && gameBoard.array.at(7) == symbol && gameBoard.array.at(8) == symbol) {
            return symbol;
        }
        if (gameBoard.array.at(0) == symbol && gameBoard.array.at(3) == symbol && gameBoard.array.at(6) == symbol) {
            return symbol;
        }
        if (gameBoard.array.at(1) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(7) == symbol) {
            return symbol;
        }
        if (gameBoard.array.at(2) == symbol && gameBoard.array.at(5) == symbol && gameBoard.array.at(8) == symbol) {
            return symbol;
        }
        if (gameBoard.array.at(0) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(8) == symbol) {
            return symbol;
        }
        if (gameBoard.array.at(2) == symbol && gameBoard.array.at(4) == symbol && gameBoard.array.at(6) == symbol) {
            return symbol;
        }
    }
}

var player1 = {
    symbol : 'X',
    position : ''
}

var player2 = {
    symbol : 'O',
    position : ''
}

const gameFlow = {
    prompt1: player1.position = prompt("Player 1 : Please enter a position (0-8)"),
    prompt2: player2.position = prompt("Player 2 : Please enter a position (0-8)")
}