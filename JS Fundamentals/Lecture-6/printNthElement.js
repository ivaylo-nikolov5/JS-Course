function printNthElement(array) {
    let step = Number(array[array.length - 1]);
    let result = [];

    for (let i = 0; i < array.length - 1; i += step) {
        result.push(array[i]);
    }

    console.log(result.join(" "));
}

printNthElement(['5', '20', '31', '4', '20', '2'])