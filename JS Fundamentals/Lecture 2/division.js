function division(number) {
    let divisible_by = "";

    if (number % 10 === 0) {
        divisible_by = "10";
    } else if (number % 7 === 0) {
        divisible_by = "7";
    } else if (number % 6 === 0) {
        divisible_by = "6";
    } else if (number % 3 === 0) {
        divisible_by = "3";
    } else if (number % 2 === 0) {
        divisible_by = "2";
    } else {
        divisible_by = "Not divisible";
    }

    if (divisible_by === "Not divisible") {
        console.log(divisible_by);
    } else {
        console.log(`The number is divisible by ${divisible_by}`);
    };
}

division(12);