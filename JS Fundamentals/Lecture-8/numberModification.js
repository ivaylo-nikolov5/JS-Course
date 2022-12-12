function numberModification(number) {
    number = number.toString();
    let numberAsArray = number.split("");

    while (Number(calcAverage(numberAsArray.join("")) <= 5)) {
        numberAsArray.push("9");
    }

    console.log(numberAsArray.join(""))

    function calcAverage(number) {
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
              sum += Number(number[i]);
        }

        return sum / number.length;
    }
}

numberModification(5835)
