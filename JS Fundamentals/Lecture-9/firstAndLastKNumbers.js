function firstAndLastKNumbers(array) {
    let k = array[0];
    array.shift();

    console.log(array.slice(0, k).join(" "));
    console.log(array.slice(-k).join(" "));

}

firstAndLastKNumbers([3,
    6, 7, 8, 9]
)