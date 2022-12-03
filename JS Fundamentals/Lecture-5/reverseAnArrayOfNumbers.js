function reverseAnArrayOfNumbers(number, array) {
    let slicedArray = array.slice(0, number);
    let reversedArray = slicedArray.reverse();
    console.log(reversedArray.join(" "));
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])