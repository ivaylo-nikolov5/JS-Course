function reverseAnArrayOfNumbers(number, array) {
    let slicedArray = [];

    for (let i = number - 1; i > -1 ; i--) {
        slicedArray.push(array[i]);
    }

    console.log(slicedArray.join(" "));

}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])