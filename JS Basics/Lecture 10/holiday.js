function holiday(input) {
    let idx = 0;
    let neededMoney = Number(input[idx]);
    let spendingDays = 0;
    let days = 0;
    idx++;
    let availableMoney = Number(input[idx]);
    idx += 2
    let action = input[idx - 1];
    let amount = Number(input[idx]);
    idx += 2;



    while (availableMoney < neededMoney) {
        if (spendingDays == 5) {
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }

        if (action === "save") {
            availableMoney += amount;
            spendingDays = 0;
        } else {
            availableMoney -= amount;
            spendingDays += 1
            if (availableMoney < 0) {
                availableMoney = 0;
            }
        }

        days += 1;

        action = input[idx - 1];
        amount = Number(input[idx]);
        idx += 2;
    };

    if (availableMoney >= neededMoney) {
        console.log(`You saved the money for ${days} days.`);
    }

};

holiday(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"
])