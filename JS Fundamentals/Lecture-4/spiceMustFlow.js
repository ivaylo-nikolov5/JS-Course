function spiceMustFlow(startingYield) {
    let days = 0;
    let spiceExtracted = 0;
    while (startingYield >= 100) {
        days++;
        spiceExtracted += startingYield - 26;
        startingYield -= 10;
    }

    console.log(days);
    if (spiceExtracted >= 26) {
        spiceExtracted -= 26;
    }
    console.log(spiceExtracted);
}

spiceMustFlow(450);