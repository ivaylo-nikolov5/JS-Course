function sumPrimeNonPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let idx = 0;


    let num = input[idx];
    idx++

    while (num !== "stop") {
        num = Number(num);
        isPrime = true;

        if (num < 0) {
            console.log("Number is negative.");
            num = input[idx];
            idx++;
            continue;
        } else if (num === 0) {
            num = input[idx];
            idx++;
            continue;
        } else if (num === 1) {
            primeSum += num;
            num = input[idx];
            idx++;
            continue
        };

        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break
            };
        };

        if (isPrime == true) {
            primeSum += num;
        } else {
            nonPrimeSum += num
        }

        num = input[idx];
        idx++;

    };

    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
};

sumPrimeNonPrime(["0",
    "-9",
    "0",
    "stop"
])