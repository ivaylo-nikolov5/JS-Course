function specialNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let numberDigitsSum = 0;
        let temp = i;
        while (temp > 0) {
            numberDigitsSum += temp % 10;
            temp = Math.trunc(temp / 10);
        }

        let isSpecial = numberDigitsSum === 5 ||
            numberDigitsSum === 7 ||
            numberDigitsSum === 11? "True": "False";

        console.log(`${i} -> ${isSpecial}`);
    }
}

specialNumbers(20)