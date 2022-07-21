function cinema(input) {
    let ticket_type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let result = 0

    switch (ticket_type) {
        case "Premiere":
            result = 12 * rows * cols;
            break;
        case "Normal":
            result = 7.5 * rows * cols;
            break;
        case "Discount":
            result = 5 * rows * cols;
            break;
    };
    console.log(result.toFixed(2) + " leva");
}

cinema(["Normal",
    "21",
    "13"
])