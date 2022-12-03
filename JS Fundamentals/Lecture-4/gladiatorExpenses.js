function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;

    for (let fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 === 0) {
            expenses += helmetPrice;
        }

        if (fight % 3 === 0) {
            expenses += swordPrice;
        }

        if (fight % 2 === 0 && fight % 3 === 0) {
            expenses += shieldPrice;
            if (fight % 12 === 0) {
                expenses += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)