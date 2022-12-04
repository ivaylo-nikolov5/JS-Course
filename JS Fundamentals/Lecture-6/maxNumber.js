function maxNumber(array) {
    let maxArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        let isMax = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > currentNumber) {
                isMax = false;
                break;
            }
        }

        if (isMax) {
            maxArray.push(currentNumber);
        }
    }

    console.log(maxArray.join(" "));
}

maxNumber([14, 24, 3, 19, 15, 17]);