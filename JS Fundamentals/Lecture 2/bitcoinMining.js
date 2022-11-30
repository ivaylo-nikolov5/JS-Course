function bitcoinMining(input) {
    let days = 0;
    let bitcoins = 0;
    let firstDay = null;
    let money = 0;
    let priceForOneBitcoin = 11949.16;
    let priceForOneGramGold = 67.51;

    for (let day = 1; day <= input.length; day++) {
        days += 1
        let gramsOfGold = input[day - 1];
        if (days % 3 === 0) {
            gramsOfGold -= gramsOfGold * 0.3;
        }


        let profit = gramsOfGold * priceForOneGramGold;
        money += profit;

        if (money >= priceForOneBitcoin) {
            let boughtBitcoins = Math.trunc(money / priceForOneBitcoin);
            bitcoins += boughtBitcoins;
            money -= boughtBitcoins * priceForOneBitcoin;
            if (firstDay === null) {
                firstDay = day;
            };
        };
    };

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstDay !== null) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

bitcoinMining([50, 100])