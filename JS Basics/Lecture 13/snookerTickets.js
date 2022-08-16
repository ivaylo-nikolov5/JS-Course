function snookerTickets(input) {
    let championshipType = input[0];
    let ticketType = input[1];
    let ticketsCount = Number(input[2]);
    let photoWithTheTrophy = input[3];
    let totalPrice = 0;

    if (championshipType == "Quarter final") {
        if (ticketType == "Standard") {
            totalPrice += 55.5 * ticketsCount;
        } else if (ticketType == "Premium") {
            totalPrice += 105.2 * ticketsCount;
        } else {
            totalPrice += 118.9 * ticketsCount;
        };

        if (totalPrice > 4000) {
            totalPrice -= totalPrice * 0.25;
        } else if (totalPrice > 2500) {
            totalPrice -= totalPrice * 0.1
            if (photoWithTheTrophy == "Y") {
                totalPrice += 40 * ticketsCount
            }
        } else if (photoWithTheTrophy == "Y") {
            totalPrice += 40 * ticketsCount
        };


    } else if (championshipType == "Semi final") {
        if (ticketType == "Standard") {
            totalPrice += 75.88 * ticketsCount;
        } else if (ticketType == "Premium") {
            totalPrice += 125.22 * ticketsCount;
        } else {
            totalPrice += 300.40 * ticketsCount;
        };

        if (totalPrice > 4000) {
            totalPrice -= totalPrice * 0.25;
        } else if (totalPrice > 2500) {
            totalPrice -= totalPrice * 0.1
            if (photoWithTheTrophy == "Y") {
                totalPrice += 40 * ticketsCount
            }
        } else if (photoWithTheTrophy == "Y") {
            totalPrice += 40 * ticketsCount
        };

    } else {
        if (ticketType == "Standard") {
            totalPrice += 110.10 * ticketsCount;
        } else if (ticketType == "Premium") {
            totalPrice += 160.66 * ticketsCount;
        } else {
            totalPrice += 400 * ticketsCount;
        };

        if (totalPrice > 4000) {
            totalPrice -= totalPrice * 0.25;
        } else if (totalPrice > 2500) {
            totalPrice -= totalPrice * 0.1
            if (photoWithTheTrophy == "Y") {
                totalPrice += 40 * ticketsCount
            }
        } else if (photoWithTheTrophy == "Y") {
            totalPrice += 40 * ticketsCount
        };

    };

    console.log(totalPrice.toFixed(2));

}

snookerTickets(["Quarter final",
    "Standard",
    "11",
    "N"
])