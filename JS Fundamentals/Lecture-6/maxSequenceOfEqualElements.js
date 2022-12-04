function maxSequenceOfEqualElements(array) {
    let number = 0;
    let longestLength = 0;

    for (let i = 0; i < array.length; i++) {
        let currentMaxLength = 1;
        let currentNumber = array[i];

        for (let j = i + 1; j < array.length; j++) {
            if (currentNumber === array[j]) {
                currentMaxLength += 1
            } else {
                break
            }
        }

        if (currentMaxLength > longestLength) {
            longestLength = currentMaxLength;
            number = currentNumber;
        }
    }

    let finalArray = [];

    for (let i = 0; i < longestLength; i++) {
        finalArray.push(number);
    }

    console.log(finalArray.join(" "))
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])