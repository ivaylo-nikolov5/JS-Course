function multiplicationTable() {
    for (let n = 1; n < 11; n++) {
        for (let m = 1; m < 11; m++) {
            let res = n * m;
            console.log(`${n} * ${m} = ${res}`);
        };
    };
};

multiplicationTable()