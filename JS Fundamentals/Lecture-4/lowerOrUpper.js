function lowerOrUpper(letter) {
    let isUpper = letter === letter.toUpperCase();
    console.log(isUpper? "upper-case": "lower-case");
}

lowerOrUpper("L")