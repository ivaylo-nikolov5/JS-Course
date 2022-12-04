function arrayRotation(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let currentItem = array[0];
        let lastItemIdx = array.length - 1;

        for (let j = 0; j < lastItemIdx; j++) {
            array[j] = array[j + 1];
        }
        array[lastItemIdx] = currentItem;
    }

    console.log(array.join(" "));
}

arrayRotation([32, 21, 61, 1], 4)