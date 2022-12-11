function passwordValidator(password) {
    let length = validateLength(password);
    let onlyLettersAndDigits = consistOnlyOfDigitsAndLetters(password);
    let digits = containsDigits(password);


    if (length && digits && onlyLettersAndDigits) {
        console.log("Password is valid");
    }


    function validateLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        }
        console.log("Password must be between 6 and 10 characters")
    }

    function containsDigits(password) {
        let digits = 0;
        for (let i = 0; i < password.length; i++) {
            let currentChar = password[i];

            if (currentChar >= '0' && currentChar <= '9') {
                digits += 1;
            }

        }

        if (digits >= 2) {
            return true;
        }

        console.log("Password must have at least 2 digits");
    }

    function consistOnlyOfDigitsAndLetters(password) {
        let allowedSymbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASLDKFJGHZXMCNVB1234567890"
        for (let i = 0; i < password.length; i++) {
            let currentChar = password[i];
            if (!allowedSymbols.includes(currentChar)){
                console.log("Password must consist only of letters and digits")
                break;
            }
        }
        return true;

    }

}

passwordValidator('')