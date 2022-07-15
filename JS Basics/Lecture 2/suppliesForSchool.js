function suppliesForSchool(input) {
    let penPackets = Number(input[0]);
    let markerPackets = Number(input[1]);
    let boardCleanerLiters = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pensPrice = penPackets * 5.8;
    let markerPrice = markerPackets * 7.2;
    let cleanerPrice = boardCleanerLiters * 1.2;

    let total = pensPrice + markerPrice + cleanerPrice
    let discount = total * (percentDiscount / 100)

    total -= discount

    console.log(total)

}

suppliesForSchool(["4 ",
    "2 ",
    "5 ",
    "13 "
])