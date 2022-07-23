function characterSequence(input) {
    let string = input[0]
    let stringLength = string.length
    for (i = 0; i < stringLength; i += 1) {
        console.log(string[i]);
    }
}

characterSequence(["softuni"])