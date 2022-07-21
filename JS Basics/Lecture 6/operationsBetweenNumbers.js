function operationsBetweenNumbers(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let operation = input[2]

    let res = "";
    let result = 0;
    if (operation === "+") {
        let type = "";
        result = first + second;
        if (result % 2 == 0) {
            type = "even";
        } else {
            type = "odd";
        }
        res = `${first} + ${second} = ${result} - ${type}`
    } else if (operation === "-") {
        let type = "";
        result = first - second;
        if (result % 2 == 0) {
            type = "even";
        } else {
            type = "odd";
        }
        res = `${first} - ${second} = ${result} - ${type}`
    } else if (operation === "*") {
        let type = "";
        result = first * second;
        if (result % 2 == 0) {
            type = "even";
        } else {
            type = "odd";
        }
        res = `${first} * ${second} = ${result} - ${type}`

    } else if (operation === "/") {
        if (second === 0) {
            res = `Cannot divide ${first} by zero`
        } else {
            let type = "";
            result = first / second;
            res = `${first} / ${second} = ${result.toFixed(2)}`
        }

    } else if (operation === "%") {
        if (second === 0) {
            res = `Cannot divide ${first} by zero`
        } else {
            let type = "";
            result = first % second;
            res = `${first} % ${second} = ${result}`
        }

    }
    console.log(res);
}
operationsBetweenNumbers(["10",
    "3",
    "%"
])