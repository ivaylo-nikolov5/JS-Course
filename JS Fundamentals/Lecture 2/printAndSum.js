function printAndSum(start, end) {
    let numbers = ""
    let sum = 0;

    while (start <= end) {
        numbers += `${start} `
        sum += start;
        start += 1;
    }

    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

printAndSum(50, 60);