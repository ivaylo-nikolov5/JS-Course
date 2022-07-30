function biggestNumber(input) {
    let maxRes = -99999999999999999999;
    let idx = 0

    while (input[idx] != "Stop") {
        if (Number(input[idx]) > maxRes) {
            maxRes = Number(input[idx])

        }
        idx++
    }
    console.log(maxRes);
}

biggestNumber(["-10",
    "20",
    "-30",
    "Stop"
])