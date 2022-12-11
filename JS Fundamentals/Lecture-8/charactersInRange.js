function charactersInRange(firstChar, secondChar) {
    let start = parseAscii(firstChar);
    let end = parseAscii(secondChar);
    let chars = [];

    if (end < start) {
        let temp = start;
        start = end;
        end = temp;

    }

    for (let i = start + 1; i < end; i++) {
        chars.push(parseChar(i));
    }

    console.log(chars.join(" "));


    function parseAscii(char) {
        return char.charCodeAt(0);
    }

    function parseChar(asciiValue) {
        return String.fromCharCode(asciiValue);
    }
}

charactersInRange('C',
    '#'
)