function nonDecreasingSubset(array) {
    let result = array.length > 0? [array[0]]: [];

    for (let i = 1; i < array.length; i++) {
        let currentNumber = array[i];

        if (currentNumber > result[result.length - 1]) {
            result.push(currentNumber);
        }
    }

    console.log(result.join(" "));
}

nonDecreasingSubset([1, 4, 5, 0, 7, 1, 5, 6])