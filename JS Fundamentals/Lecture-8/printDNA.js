function printDNA(number) {
    let lineLength = 6;
    let sequence = "ATCGTTAGGG";
    let idx = 0;
    for (let i = 0; i < Math.ceil(number / 4); i++) {
        let line = "";
        idx = printLine(sequence, idx);
        if (idx >= sequence.length) {
            idx = 0;
        }

    }

    function printLine(sequence, idx) {

        for (let i = 0; i < 2; i++) {
            let hyphens = 2 * i;
            let stars = 2 - i;

            let line = fillLine(stars, "*");
            idx = checkIndex(idx);
            line += sequence[idx];
            idx = checkIndex(idx)
            line += fillLine(hyphens, "-");
            idx = checkIndex(idx);
            line += sequence[idx + 1];
            idx = checkIndex(idx);
            line += fillLine(stars, "*");

            idx += 2;
            console.log(line);
        }

        console.log(`${sequence[idx]}----${sequence[idx + 1]}`);

        console.log(`*${sequence[idx + 2]}--${sequence[idx + 3]}*`);

        return idx + 4;
    }

    function fillLine(end, symbol) {
        let line = ""
        for (let j = 0; j < end; j++) {
            line += symbol;
        }

        return line;
    }

    function checkIndex(idx) {
        if (idx >= sequence.length) {
            idx = 0;
        }
        return idx;
    }
}

printDNA(10)