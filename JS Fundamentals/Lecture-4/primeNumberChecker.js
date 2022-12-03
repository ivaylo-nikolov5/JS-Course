function primeNumberChecker(number) {
    let isPrime = true;
    let x = 10;

    while (x > 1) {
        if (number % x === 0 && x !== number) {
            isPrime = false;
            break;
        }
        x--;
    }

    console.log(isPrime);

}

primeNumberChecker(17)