function rotateArray(array) {
    let rotations = Number(array[array.length - 1]);
    array.pop();

    for (let i = 0; i < rotations; i++) {
        let lastItem = array[array.length -1];

        for (let j = array.length- 1; j >= 0; j--) {
            array[j] = array[j - 1];
        }

        array[0] = lastItem;
    }

    console.log(array.join(" "));

}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);