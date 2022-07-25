function cleverLilly(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toys = 0;
    let startMoney = 10;
    let money = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            money += startMoney - 1;
            startMoney += 10;
        } else {
            toys += 1
        }
    }

    money += toyPrice * toys;

    let diff = Math.abs(money - washingMachinePrice);

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    };

}

cleverLilly(["21",
    "1570.98",
    "3"
])