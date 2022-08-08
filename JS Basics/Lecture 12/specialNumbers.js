function specialNumbers(input) {
    let num = Number(input[0])
    let result = "";

    for (let i = 1111; i <= 9999; i++) {
        let iAsStr = i.toString();
        let isSpecial = true;

        for (let j = 0; j < 4; j++) {
            let n = Number(iAsStr[j])
            if (num % n !== 0) {
                isSpecial = false;
                break;
            };

        };

        if (isSpecial === true) {
            result += `${i} `
        };
    };

    console.log(result);
};

specialNumbers(["16"])