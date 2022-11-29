function triangleOfNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += `${i} `;
        };

        console.log(line);
    };
}

triangleOfNumbers(9);