function addAndSubtract(array) {
    let defaultArraySum = 0;
    let modifiedArraySum = 0;

    for (let i = 0; i < array.length; i++) {
        defaultArraySum += array[i];

        if (array[i] % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }

        modifiedArraySum += array[i];
    }

    console.log(array);
    console.log(defaultArraySum);
    console.log(modifiedArraySum);
}

addAndSubtract([5, 15, 23, 56, 35])