function combinations(input) {
    let num = Number(input);
    let combinations_ = 0;

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            for (let k = 0; k <= num; k++) {
                if (i + j + k === num) {
                    combinations_++;
                };
            };
        };
    };

    console.log(combinations_);
};

combinations(["5"])