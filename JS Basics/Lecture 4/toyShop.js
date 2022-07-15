function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalToys = puzzles + talkingDolls + bears + minions + trucks
    let totalPrice = puzzles * 2.6 + talkingDolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2

    if (totalToys >= 50) {
        totalPrice -= totalPrice * 0.25
    }

    totalPrice -= totalPrice * 0.1

    if (totalPrice >= holidayPrice) {
        console.log(`Yes! ${(totalPrice - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - totalPrice).toFixed(2)} lv needed.`);
    }
}

toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"
])