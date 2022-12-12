function pointsValidation(coords) {
    let x1 = coords[0];
    let y1 = coords[1];
    let x2 = coords[2];
    let y2 = coords[3];

    let x1y100 = (isDistanceValid(x1, y1, 0, 0));
    let x2y200 = (isDistanceValid(x2, y2, 0, 0));
    let x1y1x2y2 = (isDistanceValid(x1, y1, x2, y2));

    let a = "invalid";
    let b = "invalid";
    let c = "invalid";

    if (x1y100 % 1 === 0) {
        a = "valid";
    }

    if (x2y200 % 1 === 0) {
        b = "valid";
    }

    if (x1y1x2y2 % 1 === 0) {
        c = "valid";
    }


    console.log(`{${x1}, ${y1}} to {0, 0} is ${a}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${b}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${c}`);

    function isDistanceValid(p1, r1, p2, r2) {
        return Math.sqrt(Math.pow((p2 - p1), 2) + Math.pow((r2 - r1), 2));
    }
}

pointsValidation([2, 1, 1, 1]);