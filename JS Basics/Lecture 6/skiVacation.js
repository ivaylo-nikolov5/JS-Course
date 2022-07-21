function skiVacation(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let totalPrice = 0;
    days -= 1
    if (roomType === "room for one person") {
        totalPrice = days * 18;
    } else if (roomType === "apartment") {
        totalPrice = days * 25;
        if (days < 10) {
            totalPrice -= totalPrice * 0.3;
        } else if (days >= 10 && days <= 15) {
            totalPrice -= totalPrice * 0.35;
        } else {
            totalPrice -= totalPrice * 0.5;
        }
    } else {
        totalPrice = days * 35
        if (days < 10) {
            totalPrice -= totalPrice * 0.1
        } else if (days >= 10 && days <= 15) {
            totalPrice -= totalPrice * 0.15
        } else {
            totalPrice -= totalPrice * 0.2
        }
    }

    if (grade === "positive") {
        totalPrice += totalPrice * 0.25
    } else {
        totalPrice -= totalPrice * 0.1
    }

    console.log(totalPrice.toFixed(2));
};

skiVacation(["30",
    "president apartment",
    "negative"
])