function processOddNumbers (array) {
    let result = [];
    for (let i = 1; i < array.length; i += 2) {
        result.unshift(array[i] * 2);
    }

    console.log(result.join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3])