const playerMove = document.querySelector("#playerMove");
const computerMove = document.querySelector("#computerMove");
const result = document.querySelector("#result");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

let player = "You";
let computer = "Computer";

let winnerByMove = {
    "rockpaper": computer,
    "paperrock": player,
    "rockscissors": player,
    "scissorsrock": computer,
    "paperscissors": computer,
    "scissorspaper": player
}
let possibleMoves = ["rock", "paper", "scissors"];

rockBtn.addEventListener("click", () => {
    chooseMove("rock");
})

paperBtn.addEventListener("click", () => {
    chooseMove("paper");
})

scissorsBtn.addEventListener("click", () => {
    chooseMove("scissors");
})


function chooseMove(currentMove) {
    let idx = Math.floor(Math.random() * possibleMoves.length);
    let computer = possibleMoves[idx];
    let combination = currentMove + computer;
    let winner = winnerByMove[combination];

    playerMove.textContent = currentMove;
    computerMove.textContent = computer;

    if (winner === undefined) {
        winner = "Draw!"
        result.textContent = winner;
        return;
    }
    result.textContent = winner + " won!";
}