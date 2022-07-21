function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let place = "";
    let destination = "";
    let cost = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                place = "Camp";
                destination = "Bulgaria";
                cost = budget * 0.3;
            } else if (budget <= 1000) {
                place = "Camp";
                destination = "Balkans";
                cost = budget * 0.4
            } else {
                place = "Hotel";
                destination = "Europe";
                cost = budget * 0.9;
            };
            break;
        case "winter":
            place = "Hotel";
            if (budget <= 100) {
                destination = "Bulgaria";
                cost = budget * 0.7;
            } else if (budget <= 1000) {
                destination = "Balkans";
                cost = budget * 0.8
            } else {
                destination = "Europe";
                cost = budget * 0.9;
            };
            break;

    };
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${cost.toFixed(2)}`);
};

journey(["75", "winter"])