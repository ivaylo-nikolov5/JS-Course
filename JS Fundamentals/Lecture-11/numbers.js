function numbers(numbers) {
    numbers = numbers.split(" ");
    let averageNumber = 0;
    let greaterNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Number(numbers[i]);
        averageNumber += numbers[i];
    }

    averageNumber /= numbers.length;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > averageNumber) {
            greaterNumbers.push(numbers[i]);
        }
    }

    if (greaterNumbers.length === 0) {
        console.log("No");
        return;
    }

    greaterNumbers = greaterNumbers.sort((a, b) => {
        return b - a;
    })

    console.log(greaterNumbers.slice(0, 5).join(" "));
}

numbers('-1 -2 -3 -4 -5 -6');