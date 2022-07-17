function tradeCommissions(input) {
    let city = input[0]
    let sells = Number(input[1])

    res = 0

    switch (city) {
        case "Sofia":
            if (sells >= 0 && sells <= 500) {
                res = sells * 0.05
            } else if (sells > 500 && sells <= 1000) {
                res = sells * 0.07
            } else if (sells > 1000 && sells <= 10000) {
                res = sells * 0.08
            } else if (sells > 10000) {
                res = sells * 0.12
            } else {
                res = "error"
            };
            break;

        case "Varna":
            if (sells >= 0 && sells <= 500) {
                res = sells * 4.5 / 100
            } else if (sells > 500 && sells <= 1000) {
                res = sells * 7.5 / 100
            } else if (sells > 1000 && sells <= 10000) {
                res = sells * 0.1
            } else if (sells > 10000) {
                res = sells * 0.13
            } else {
                res = "error"
            };
            break;

        case "Plovdiv":
            if (sells >= 0 && sells <= 500) {
                res = sells * 5.5 / 100
            } else if (sells > 500 && sells <= 1000) {
                res = sells * 0.08
            } else if (sells > 1000 && sells <= 10000) {
                res = sells * 0.12
            } else if (sells > 10000) {
                res = sells * 14.5 / 100
            } else {
                res = "error"
            };
            break;

        default:
            res = "error"
    }
    if (res === "error") {
        console.log(res);
    } else {
        console.log(res.toFixed(2));
    }
}

tradeCommissions(["Kaspichan",
    "-50"
])