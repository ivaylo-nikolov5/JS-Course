function sumOfOddNumbers(end) {
    let sum = 0;
    let num = 1;
    while (end > 0) {
        sum += num;
        console.log(num);
        num += 2;
        end--;

    }

    console.log(`Sum: ${sum}`);
}


sumOfOddNumbers(3);