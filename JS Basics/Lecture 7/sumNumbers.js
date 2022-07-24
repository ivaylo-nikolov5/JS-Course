function sumOfNumbers(input) {
    let numsAsString = input[0];
    let sum = 0;

    for (i = 0; i < numsAsString.length; i++) {
        sum += Number(numsAsString[i])
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"])