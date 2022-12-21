let radius;
const PI = 3.14159;

document.getElementById("calculate").onclick = function() {
    radius = document.getElementById("radiusInput").value;
    let circumference = (2 * PI * radius).toFixed(2);
    document.getElementById("resultP").innerHTML = `The circumference of the circle is: ${circumference} centimeters.`;
}