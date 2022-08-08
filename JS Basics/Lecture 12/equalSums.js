function equalSums(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let result = "";
    for (let i = n; i <= m; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let iAsString = i.toString()
        for (let j = 1; j <= 6; j++) {
            if (j % 2 == 0) {
                evenSum += Number(iAsString[j - 1]);
            } else {
                oddSum += Number(iAsString[j - 1]);

            };
        };

        if (evenSum === oddSum) {
            result += `${i} `
        };
    };

    console.log(result);
};

equalSums(["123456",
    "124000"
])