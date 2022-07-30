function smallestNumber(input) {
    let minRes = 99999999999999999999;
    let idx = 0

    while (input[idx] != "Stop") {
        if (Number(input[idx]) < minRes) {
            minRes = Number(input[idx])

        }
        idx++
    }
    console.log(minRes);
}

smallestNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"
])