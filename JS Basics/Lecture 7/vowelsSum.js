function vowelsSum(input) {
    let string = input[0];
    let stringLength = string.length;
    let sum = 0;

    for (i = 0; i < stringLength; i += 1) {
        if (string[i] == 'a') {
            sum += 1;
        } else if (string[i] == "e") {
            sum += 2;
        } else if (string[i] == "i") {
            sum += 3;
        } else if (string[i] == "o") {
            sum += 4;
        } else if (string[i] == "u") {
            sum += 5;
        }
    }

    console.log(sum);
}

vowelsSum(["bamboo"])