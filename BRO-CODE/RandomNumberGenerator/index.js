let start;
let end;
let numbersCount;

let numbers = document.getElementById("generateBtn").onclick = function() {
    let generatedNumbers = [];

    start = document.getElementById("start").value;
    start = Number(start);

    end = document.getElementById("end").value;
    end = Number(end);

    numbersCount = document.getElementById("count").value

    for (let i = 0; i < numbersCount; i++) {
        let currentNumber = Math.floor(Math.random() * (end - start) + start + 1);
        generatedNumbers.push(currentNumber);
    }

    document.getElementById("resultLabel").innerHTML = generatedNumbers.join(",  ");

}

console.log(start, end);