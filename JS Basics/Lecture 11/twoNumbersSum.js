function twoNumbersSum(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let sum = Number(input[2]);
    let combinations = 0;
    let found = false;

    for (let i = numOne; i <= numTwo; i++) {
        for (let j = numOne; j <= numTwo; j++) {
            let currentCombination = i + j;
            if (currentCombination === sum) {
                combinations++
                found = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${sum})`);
                break;
            };
            combinations++
        };
        if (found === true) {
            break;
        };
    };
    if (found === false) {
        console.log(`${combinations} combinations - neither equals ${sum}`);
    };

};

twoNumbersSum(["88",
    "888",
    "2000"
])