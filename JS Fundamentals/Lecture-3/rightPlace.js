function rightPlace(firstString, char, secondString) {
    // let newString = "";

    // for (let i = 0; i < firstString.length; i++) {
    //     if (firstString[i] === "_") {
    //         newString += char;
    //     } else {
    //         newString += firstString[i];
    //     }
    // }

    // if (newString === secondString) {
    //     console.log("Matched");
    // } else {
    //     console.log("Not Matched");
    // };

    let result = firstString.replace("_", char);
    let output = result === secondString ? "Matched" : "Not Matched";
    console.log(output);

}

rightPlace('Str_ng', 'I', 'Strong');