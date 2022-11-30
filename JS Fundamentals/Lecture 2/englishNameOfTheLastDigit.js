function englishNameOfTheLastDigit(number) {
    number = String(number);
    let lastDigit = Number(number[number.length - 1]);
    let result = "";
    if (lastDigit === 0) {
        result = "zero"
    } else if (lastDigit === 1) {
        result = "one";
    } else if (lastDigit === 2) {
        result = "two";
    } else if (lastDigit === 3) {
        result = "three";
    } else if (lastDigit === 4) {
        result = "four";
    } else if (lastDigit === 5) {
        result = "five";
    } else if (lastDigit === 6) {
        result = "six";
    } else if (lastDigit === 7) {
        result = "seven";
    } else if (lastDigit === 8) {
        result = "eight";
    } else if (lastDigit === 9) {
        result = "nine";
    };

    console.log(result);
}

englishNameOfTheLastDigit(1643);