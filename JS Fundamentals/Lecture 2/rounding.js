function rounding(number, digit) {
    if (digit > 15) {
        digit = 15;
    }
    rounded = number.toFixed(digit);
    console.log(parseFloat(rounded));
}

rounding(10.5, 3);