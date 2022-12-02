function triplesOfLatinLetters(number) {
    number = parseInt(number)
    for (let i = 97; i <= 96 + number; i++) {
        let letterI = String.fromCharCode(i);
        for (let j = 97; j <= 96 + number; j++) {
            let letterJ = String.fromCharCode(j);
            for (let k = 97; k <= 96 + number; k++) {
                let letterK = String.fromCharCode(k);
                console.log(`${letterI}${letterJ}${letterK}`)
            }
        }
    }
}

triplesOfLatinLetters("3")