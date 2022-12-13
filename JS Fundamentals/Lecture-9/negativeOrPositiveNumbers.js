function negativeOrPositiveNumbers(array) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i]);

        if (currentNumber < 0) {
            result.unshift(currentNumber);
            continue;
        }
        result.push(currentNumber);
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }

}

negativeOrPositiveNumbers(['3', '-2', '0', '-1']);
