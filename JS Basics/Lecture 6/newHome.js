function newHome(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let total = 0;

    switch (flowersType) {
        case "Roses":
            total = flowersCount * 5
            if (flowersCount > 80) {
                total -= total * 0.1
            };
            break;
        case "Dahlias":
            total = flowersCount * 3.8
            if (flowersCount > 90) {
                total -= total * 0.15
            };
            break;
        case "Tulips":
            total = flowersCount * 2.8
            if (flowersCount > 80) {
                total -= total * 0.15
            };
            break;
        case "Narcissus":
            total = flowersCount * 3
            if (flowersCount < 120) {
                total += total * 0.15
            };
            break;
        case "Gladiolus":
            total = flowersCount * 2.5
            if (flowersCount < 80) {
                total += total * 0.2
            };
            break;
    }

    let diff = Math.abs(budget - total);

    if (total > budget) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${diff.toFixed(2)} leva left.`);
    };
};

newHome(["Narcissus",
    "119",
    "360"
])