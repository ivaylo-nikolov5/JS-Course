let counter;


counter = 0;

document.getElementById("decrease-button").onclick = function() {
    counter--;
    document.getElementById("counter").innerHTML = counter;
}

document.getElementById("reset-button").onclick = function() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}

document.getElementById("increase-button").onclick = function() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
}