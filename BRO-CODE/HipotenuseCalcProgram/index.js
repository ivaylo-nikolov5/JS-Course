let a;
let b;
let c;

document.getElementById("calculate-button").onclick = function() {
    a = document.getElementById("a-side").value;
    a = Number(a);

    b = document.getElementById("b-side").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("result").innerHTML = `The side C is: ${c.toFixed(2)} centimeters long.`;
}