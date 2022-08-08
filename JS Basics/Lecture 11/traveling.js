function traveling(input) {
    let idx = 0;
    let destination = input[idx];
    idx++;
    let neededMoney = Number(input[idx]);
    idx++;
    let savedMoney = 0;

    while (destination !== "End") {
        while (savedMoney < neededMoney) {
            let amount = Number(input[idx]);
            savedMoney += amount;
            idx++;
        };
        console.log(`Going to ${destination}!`);
        destination = input[idx];
        idx++;
        neededMoney = Number(input[idx]);
        savedMoney = 0;
        idx++;
    };
};

traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
])