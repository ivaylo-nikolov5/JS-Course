const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

initializeGame()

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = ` ${currentPlayer}'s turn`;
}

function cellClicked() {
    let cellIndex = this.getAttribute("cellIndex");
    cellIndex = Number(cellIndex);
    if (!options[cellIndex] === "" || !running) {
       return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, idx) {
    options[idx] = currentPlayer;
    cell.textContent = currentPlayer;
    changePlayer()
}

function changePlayer() {
    currentPlayer = currentPlayer === "X"? "O": "X";
    statusText.textContent = ` ${currentPlayer}'s turn`;
}

function checkWinner() {
    let won = false;
    for (let i = 0; i < winConditions.length - 1; i++) {
        const condition = winConditions[i];
        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];

        if (cellA === cellB && cellB === cellC && cellA !== "") {
            won = true;
            break;
        }

    }

    if (won) {
        changePlayer();
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = "Draw";
    } else {
        
    }
}

function restartGame() {
    running = true;
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    statusText.textContent = `${currentPlayer}'s turn`;

}