function equalArrays(array1, array2) {
    let diffIdx = undefined;
    let sum = 0;

    for (let i = 0; i < array1.length; i++) {
        let firstNum = Number(array1[i]);
        let secondNum = Number(array2[i]);

        if (firstNum !== secondNum) {
            diffIdx = i;
            break;
        }

        sum += firstNum;
    }

    if (diffIdx === undefined) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${diffIdx} index`);
    }

}

equalArrays(['1'], ['10']);