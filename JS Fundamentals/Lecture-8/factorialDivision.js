function factorialDivision(num1, num2) {
    let firstFactorial = calcFactorial(num1);
    let secondFactorial = calcFactorial(num2);

    console.log((firstFactorial / secondFactorial).toFixed(2));

    function calcFactorial(n) {
        if (n <= 1) {
            return 1;
        }

        return n * calcFactorial(n - 1);
    }
}

factorialDivision(6, 2)