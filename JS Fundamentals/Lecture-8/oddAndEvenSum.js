function oddAndEvenSum(number) {
    number = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    calcSums(number)

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


    function calcSums (number) {
        for (let i = 0; i < number.length; i++) {
            let currentNumber = Number(number[i]);
            if (isEven(currentNumber)) {
                evenSum += currentNumber;
            } else {
                oddSum += currentNumber;
            }

        }

    }



    function isEven(n) {
        return n % 2 === 0;
    }
}

oddAndEvenSum(3495892137259234)