function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let boatCost = 0;


    switch (season) {
        case "Spring":
            boatCost = 3000
            if (fishermen <= 6) {
                boatCost -= boatCost * 0.1;
            } else if (fishermen > 6 && fishermen <= 11) {
                boatCost -= boatCost * 0.15;
            } else {
                boatCost -= boatCost * 0.25;
            };

            if (fishermen % 2 == 0) {
                boatCost -= boatCost * 0.05;
            };
            break;
        case "Summer":
            boatCost = 4200
            if (fishermen <= 6) {
                boatCost -= boatCost * 0.1;
            } else if (fishermen > 6 && fishermen <= 11) {
                boatCost -= boatCost * 0.15;
            } else {
                boatCost -= boatCost * 0.25;
            };

            if (fishermen % 2 == 0 && season !== "Autumn") {
                boatCost -= boatCost * 0.05;
            };
            break;
        case "Autumn":
            boatCost = 4200
            if (fishermen <= 6) {
                boatCost -= boatCost * 0.1;
            } else if (fishermen > 6 && fishermen <= 11) {
                boatCost -= boatCost * 0.15;
            } else {
                boatCost -= boatCost * 0.25;
            };
            break;
        case "Winter":
            boatCost = 2600
            if (fishermen <= 6) {
                boatCost -= boatCost * 0.1;
            } else if (fishermen > 6 && fishermen <= 11) {
                boatCost -= boatCost * 0.15;
            } else {
                boatCost -= boatCost * 0.25;
            };

            if (fishermen % 2 == 0) {
                boatCost -= boatCost * 0.05;
            };
            break;
    };
    diff = Math.abs(boatCost - budget).toFixed(2);

    if (budget >= boatCost) {
        console.log(`Yes! You have ${diff} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff} leva.`);
    }
};

fishingBoat(["3600",
    "Autumn",
    "6"
])