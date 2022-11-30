function reverseString(string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    };

    console.log(reversedString);
}


function reverseString2(string) {
    let reversedString = string.split("").reverse().join("");
    console.log(reversedString);
}

reverseString2("SoftUni");