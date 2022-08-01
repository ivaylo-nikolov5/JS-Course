function cakePieces(input) {
    let notEnough = false;
    let idx = 0;
    let length = Number(input[idx]);
    idx++;
    let width = Number(input[idx]);
    let pieces = length * width
    idx++;

    let piece = input[idx];
    idx++;

    while (piece !== "STOP") {
        if (piece > pieces) {
            notEnough = true;
            break;
        };

        pieces -= Number(piece);
        piece = input[idx];
        idx++;
    }

    if (notEnough === true) {
        console.log(`No more cake left! You need ${piece - pieces} pieces more.`);
    } else {
        console.log(`${pieces} pieces are left.`);
    }

}

cakePieces[("10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21")]