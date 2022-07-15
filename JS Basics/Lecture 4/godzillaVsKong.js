function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let statistClothingPrice = Number(input[2]);

    let decor = movieBudget * 0.1
    if (statistsCount > 150) {
        statistClothingPrice -= statistClothingPrice * 0.1
    }

    let neededMoney = statistClothingPrice * statistsCount + decor

    if (neededMoney > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(neededMoney - movieBudget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - neededMoney).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["9587.88",
    "222",
    "55.68"
])