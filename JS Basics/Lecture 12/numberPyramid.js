function numberPyramid(input) {
    let n = Number(input[0]);

    let counter = 1;
    let isBigger = false;
    let row = "";

    for (let i = 1; i <= n; i++) {
        row = "";
        for (let j = 1; j <= i; j++) {
            if (counter > n) {
                isBigger = true;
                break


            };
            row += `${counter} `
            counter++
        };

        console.log(row);

        if (isBigger) {
            break
        };

    };
};

numberPyramid(["15"])