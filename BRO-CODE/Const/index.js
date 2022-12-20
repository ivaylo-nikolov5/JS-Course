const r = Number(window.prompt("Enter the circle's radius"))
const pi = Math.PI;

let circumference = 2 * pi * r;

document.getElementById("result").innerHTML = `The area of a circle with radius ${r} is ${area.toFixed(4)}`;