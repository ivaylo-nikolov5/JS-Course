function mergeArrays(array1, array2) {
    let mergedArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            mergedArray.push(Number(array1[i]) + Number(array2[i]));
        } else {
            mergedArray.push(array1[i] + array2[i]);
        }

    }

    console.log(mergedArray.join(" - "));
}

mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']

)