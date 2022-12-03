function binaryToDecimal(binNumber) {
    binNumber = binNumber.split("").reverse().join("");
    let decNumber = 0;

    for (let i = 0; i < binNumber.length; i++) {
        if (binNumber[i] === "1") {
            decNumber += Math.pow(2, i);
        }
    }

    console.log(decNumber);


}

binaryToDecimal("11110000");