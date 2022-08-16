function barcodeGenerator(input) {
    let firstNum = input[0];
    let secondNum = input[1];

    result = "";
    let firstOne = Number(firstNum[0]);
    let firstTwo = Number(firstNum[1]);
    let firstThree = Number(firstNum[2]);
    let firstFourth = Number(firstNum[3]);

    let secondOne = Number(secondNum[0]);
    let secondTwo = Number(secondNum[1]);
    let secondThree = Number(secondNum[2]);
    let secondFourth = Number(secondNum[3]);

    for (let i = firstOne; i <= secondOne; i++) {
        for (let j = firstTwo; j <= secondTwo; j++) {
            for (let k = firstThree; k <= secondThree; k++) {
                for (let l = firstFourth; l <= secondFourth; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        result += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }

    console.log(result);
}

barcodeGenerator(["3256",
    "6579"
])