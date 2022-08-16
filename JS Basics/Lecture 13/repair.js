function repair(input) {

    let tired = false;
    let idx = 0;
    let height = Number(input[idx]);
    idx++;
    let width = Number(input[idx]);
    idx++;
    let notForPainting = Number(input[idx]);
    idx++;


    let totalArea = height * width * 4;
    let areaForPainting = totalArea - (totalArea * (notForPainting / 100))
    let command = input[idx];
    idx++;

    while (totalArea > 0) {
        if (command == "Tired!") {
            tired = true;
            break;
        };

        command = Number(command);
        areaForPainting -= command;

        if (areaForPainting <= 0) {
            break;
        }
        command = input[idx];
        idx++;
    }

    if (areaForPainting === 0) {
        console.log(`All walls are painted! Great job, Pesho!`);
    } else if (tired == true) {
        console.log(`${areaForPainting} quadratic m left.`);
    } else {
        console.log(`All walls are painted and you have ${Math.abs(areaForPainting)} l paint left!`);
    }
}

repair(["2",
    "3",
    "25",
    "6",
    "7",
    "8"
])