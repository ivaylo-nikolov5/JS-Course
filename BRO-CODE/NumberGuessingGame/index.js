const target = Math.trunc(Math.random() * 10 + 1);
let numberOfTries = 0;
let guessed = false;

document.getElementById("submitBtn").onclick = function() {
    let currentGuess = Number(document.getElementById("guess").value);

    if (currentGuess === target) {
        document.getElementById("result").innerHTML = `You guessed! The number is ${target}. You made ${numberOfTries} attempts.`
        guessed = true;
        return;
    } else if (currentGuess < target) {
        alert("Too small!");
    } else {
        alert("Too large!");
    }

    numberOfTries++;
}