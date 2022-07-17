function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let res = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana":
                    res = 2.5 * quantity;
                    break;
                case "apple":
                    res = 1.2 * quantity;
                    break;
                case "orange":
                    res = 0.85 * quantity;
                    break;
                case "grapefruit":
                    res = 1.45 * quantity;
                    break;
                case "kiwi":
                    res = 2.7 * quantity;
                    break;
                case "pineapple":
                    res = 5.5 * quantity;
                    break;
                case "grapes":
                    res = 3.85 * quantity;
                    break;
                default:
                    res = "error";
                    break;

            };
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana":
                    res = 2.7 * quantity;
                    break;
                case "apple":
                    res = 1.25 * quantity;
                    break;
                case "orange":
                    res = 0.90 * quantity;
                    break;
                case "grapefruit":
                    res = 1.6 * quantity;
                    break;
                case "kiwi":
                    res = 3 * quantity;
                    break;
                case "pineapple":
                    res = 5.6 * quantity;
                    break;
                case "grapes":
                    res = 4.2 * quantity;
                    break;
                default:
                    res = "error";
                    break;
            };
            break;
        default:
            res = "error";
            break;
    };
    if (res === "error") {
        console.log(res);
    } else {
        console.log(res.toFixed(2));
    }
}

fruitShop(["pineapple",
    "Wednesday",
    "1.600"
])