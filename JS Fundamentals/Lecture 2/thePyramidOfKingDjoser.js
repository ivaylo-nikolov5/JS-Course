function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let finalHeight = 0;

    while (base > 1) {
        let totalBlocks = base * base * increment;
        let innerBlocks = (base - 2) * (base - 2) * increment;
        let outerBlocks = totalBlocks - innerBlocks;

        if (base - 2 === 0) {
            break;
        }

        finalHeight++;
        base -= 2;

        if (finalHeight % 5 === 0) {
            lapis += outerBlocks;
        } else {
            marble += outerBlocks;
        };

        stone += innerBlocks;


    };

    finalHeight++;
    let height = Math.floor(finalHeight * increment);
    gold += Math.ceil(base * base * increment);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}


thePyramidOfKingDjoser(12,
    1
)