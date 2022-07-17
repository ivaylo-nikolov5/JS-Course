function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let res = 0

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    res = quantity * 0.5;
                    break;
                case "water":
                    res = quantity * 0.8;
                    break;
                case "beer":
                    res = quantity * 1.2;
                    break;
                case "sweets":
                    res = quantity * 1.45;
                    break;
                case "peanuts":
                    res = quantity * 1.6;
                    break;
            };
            break;

        case "Plovdiv":
            switch (product) {
                case "coffee":
                    res = quantity * 0.4;
                    break;
                case "water":
                    res = quantity * 0.7;
                    break;
                case "beer":
                    res = quantity * 1.15;
                    break;
                case "sweets":
                    res = quantity * 1.3;
                    break;
                case "peanuts":
                    res = quantity * 1.5;
                    break;
            }
            break;

        case "Varna":
            switch (product) {
                case "coffee":
                    res = quantity * 0.45;
                    break;
                case "water":
                    res = quantity * 0.7;
                    break;
                case "beer":
                    res = quantity * 1.1;
                    break;
                case "sweets":
                    res = quantity * 1.35;
                    break;
                case "peanuts":
                    res = quantity * 1.55;
                    break;
            }
            break;
    };

    console.log(res);
};

smallShop(["sweets",
    "Sofia",
    "2.23"
])