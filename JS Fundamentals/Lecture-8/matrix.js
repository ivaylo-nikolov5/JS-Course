function matrix(number) {
    for (let i = 0; i < number; i++) {
        printLine(number);
    }

    function printLine(n) {
        let result = [];
        for (let i = 0; i < number; i++) {
            result.push(n);
        }

        console.log(result.join(" "));
    }
}

matrix(3)