const display = document.querySelector("#stopwatchDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const stopBtn = document.querySelector("#stopBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;

startBtn.addEventListener("click", setInterval(startTimer, 1000));
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
    seconds += 1
    seconds %= 60;
    console.log(seconds);
}


function pauseTimer() {

}

function stopTimer() {

}


