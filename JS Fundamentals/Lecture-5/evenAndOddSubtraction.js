function evenAndOddSubtraction(array) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    console.log(evenSum - oddSum);
}

evenAndOddSubtraction([3,5,7,9]);