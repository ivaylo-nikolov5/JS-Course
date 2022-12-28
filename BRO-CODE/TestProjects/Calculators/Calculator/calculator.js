let currentNumber = [];
let label = document.getElementById("numbersLabel");
let res = 0;

document.getElementById("clearBtn").onclick = function() {
    if (currentNumber.length <= 1) {
        currentNumber.pop();
        label.innerHTML = 0;
        return;
    }

    currentNumber.pop();
    label.innerHTML = currentNumber.join("")
}

document.getElementById("oneBtn").onclick = function() {
    let result = appendNumber(1, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("twoBtn").onclick = function() {
    let result = appendNumber(2, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("threeBtn").onclick = function() {
    let result = appendNumber(3, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("fourBtn").onclick = function() {
    let result = appendNumber(4, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("fiveBtn").onclick = function() {
    let result = appendNumber(5, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("sixBtn").onclick = function() {
    let result = appendNumber(6, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("sevenBtn").onclick = function() {
    let result = appendNumber(7, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("eightBtn").onclick = function() {
    let result = appendNumber(8, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("nineBtn").onclick = function() {
    let result = appendNumber(9, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("zeroBtn").onclick = function() {
    if (currentNumber.length === 0) {
        return;
    }

    let result = appendNumber(0, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("zeroBtn").onclick = function() {
    if (currentNumber.length === 0) {
        return;
    }

    let result = appendNumber(0, currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}

document.getElementById("pointBtn").onclick = function() {
    if (currentNumber.length === 0 || currentNumber[currentNumber.length - 1] === ".") {
        return;
    }

    let result = appendNumber(".", currentNumber)

    if (result === false) {
        return;
    }
    label.innerHTML = result;
}



document.getElementById("addBtn").onclick = function() {
    let num = Number(currentNumber.join(""));
    currentNumber = [];
    label.innerHTML = 0;
    res += num;

    document.getElementById("equalsBtn").onclick = function() {
        if (currentNumber[currentNumber.length - 1] === ".") {
            return;
        }

        res += num = Number(currentNumber.join(""));
        label.innerHTML = res;
        currentNumber = [];
        res = 0;
    }
}

document.getElementById("subtractBtn").onclick = function() {
    let num = Number(currentNumber.join(""));
    currentNumber = [];
    label.innerHTML = 0;
    res = num;

    document.getElementById("equalsBtn").onclick = function() {
        if (currentNumber[currentNumber.length - 1] === ".") {
            return;
        }

        res -= num = Number(currentNumber.join(""));
        label.innerHTML = res;
        currentNumber = [];
        res = 0;
    }
}

document.getElementById("multiplyBtn").onclick = function() {
    let num = Number(currentNumber.join(""));
    currentNumber = [];
    label.innerHTML = 0;
    res = num;

    document.getElementById("equalsBtn").onclick = function() {
        if (currentNumber[currentNumber.length - 1] === ".") {
            return;
        }

        res *= num = Number(currentNumber.join(""));
        label.innerHTML = res;
        currentNumber = [];
        res = 0;
    }
}

document.getElementById("divisionBtn").onclick = function() {
    let num = Number(currentNumber.join(""));
    currentNumber = [];
    label.innerHTML = 0;
    res = num;

    document.getElementById("equalsBtn").onclick = function() {
        if (currentNumber[currentNumber.length - 1] === ".") {
            return;
        }

        res /= num = Number(currentNumber.join(""));
        label.innerHTML = res;
        currentNumber = [];
        res = 0;
    }
}


function appendNumber(number, currentNumber) {
    if (currentNumber.length === 14) {
        return false;
    }

    currentNumber.push(number);
    return currentNumber.join("");
}