let counterValue = 0;
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");

let decrease = function() {
    counterValue--;
    counter.innerHTML = counterValue;
}

let increase = function() {
    counterValue++
    counter.innerHTML = counterValue;
}