class Player {
    score = 0;
    increasePoints(points) {
        this.score += points;
        console.log(`You increased your score with ${points} points!`);
    }

    pause() {
        console.log("You paused the game!");
    }
    exit() {
        console.log("You exited the game!");
    }
}

const player1 = new Player();
const player2 = new Player();

player1.increasePoints(20);
player2.increasePoints(7);

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.pause();

player1.exit();
player2.exit();