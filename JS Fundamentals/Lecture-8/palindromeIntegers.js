function palindromeIntegers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i].toString();
        if (isPalindrome(currentNumber)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    function isPalindrome(number) {
        return number === number.split("").reverse().join("");
    }
}

palindromeIntegers([32,2,232,1010])