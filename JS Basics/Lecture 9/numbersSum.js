function numbersSum(input) {
    let number = Number(input[0]);
    let idx = 1;
    let result = 0;

    while (result < number) {
        result += Number(input[idx]);
        idx++
    };
    console.log(result);
}

numbersSum(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
])