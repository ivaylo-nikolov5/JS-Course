function sequence(input) {
    let border = Number(input[0]);
    let startNum = 1;

    while (startNum <= border) {
        console.log(startNum);

        startNum = startNum * 2 + 1
    };
};

sequence(["67"])