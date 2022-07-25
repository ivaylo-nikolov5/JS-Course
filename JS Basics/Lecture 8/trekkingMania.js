function trekkingMania(input) {
    let musalla = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    let total = 0;

    for (i = 1; i < input.length; i++) {
        let group = Number(input[i]);

        if (group <= 5) {
            musalla += group
        } else if (group <= 12) {
            monblan += group
        } else if (group <= 25) {
            kilimanjaro += group
        } else if (group <= 40) {
            k2 += group
        } else {
            everest += group
        }
        total += group
    };

    console.log(`${((musalla / total) * 100).toFixed(2)}%`);
    console.log(`${((monblan / total) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaro / total) * 100).toFixed(2)}%`);
    console.log(`${((k2 / total) * 100).toFixed(2)}%`);
    console.log(`${((everest / total) * 100).toFixed(2)}%`);
}

trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"
])