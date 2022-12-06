function magicMatrices(matrix) {
    let isMagic = true;
    let rowsSum = undefined;
    let colsSum = undefined;

    for (let row = 0; row < matrix.length; row++) {
        let currentSum = 0;
        for (let col = 0; col < matrix[0].length; col++) {
            currentSum += matrix[row][col];
        }
        if (rowsSum === undefined) {
            rowsSum = currentSum;
        } else if (currentSum !== rowsSum) {
            isMagic = false;
            break;
        }
    }

    if (!isMagic) {
        console.log(isMagic);
        return;
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let currentSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currentSum += matrix[row][col];
        }
        if (colsSum === undefined) {
            colsSum = currentSum;
        } else if (currentSum !== colsSum) {
            isMagic = false;
            break;
        }

    }

    console.log(isMagic);
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)