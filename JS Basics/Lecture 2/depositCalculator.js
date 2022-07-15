function depositCalculator(input) {
    let amount = Number(input[0]);
    let term = Number(input[1]);
    let percent = Number(input[2]);

    let interest = Number(amount * (percent / 100))
    let month_interest = Number(interest / 12)
    let total = Number(amount + term * month_interest)

    console.log(total)
}

depositCalculator(["2350",
    "6 ",
    "7 "
])