function summerOutfit(input) {
    let degrees = Number(input[0]);
    let partOfTheDay = input[1];

    let outfit = "";
    let shoes = "";


    switch (partOfTheDay) {
        case "Morning":
            if (10 <= degrees && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (18 < degrees && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals";
            };
            break;
        case "Afternoon":
            if (10 <= degrees && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (18 < degrees && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            };
            break;
        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
            break;
    };
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
};

summerOutfit(["22",
    "Afternoon"
])