const display = document.querySelector("#displayLabel");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let hrs = 0;
let mins = 0;
let secs = 0;
let paused = true;
var intervalId;

startBtn.addEventListener("click", () => {
    if (!paused) {
        return;
    }

    paused = false;
    intervalId = setInterval(updateTime, 1000);

});

pauseBtn.addEventListener("click", () => {
    if (paused) {
        return;
    }

    paused = true;
    clearInterval(intervalId);
})

resetBtn.addEventListener("click", () => {
    hrs = 0;
    mins = 0;
    secs = 0;
    paused = true;
    display.textContent = `00 : 00 : 00`;
    clearInterval(intervalId);



})

function updateTime() {
    secs++;
    secs = secs % 60;
    mins = secs % 60 % 60;
    hrs = secs % 60 % 60 % 60;

    let formattedSecs = formatTime(secs);
    let formattedMins = formatTime(mins);
    let formattedHrs = formatTime(hrs);

    display.textContent = `${formattedHrs} : ${formattedMins} : ${formattedSecs}`;

    function formatTime(time) {
        return ("0" + time).length > 2? time: "0" + time;
    }
}



