function numsDivisible9(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let sum = 0;

    for (i = num1; i <= num2; i += 1) {
        if (i % 9 == 0) {
            sum += i

        }
    }
    console.log(`The sum: ${sum}`);

    for (i = num1; i <= num2; i += 1) {
        if (i % 9 == 0) {
            console.log(i);
        }
    }
}

numsDivisible9(["100", "200"])