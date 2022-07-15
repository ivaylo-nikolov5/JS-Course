function passwordGuess(input) {
    let password = input[0];
    let valid_password = "s3cr3t!P@ssw0rd";

    if (password === valid_password) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"])