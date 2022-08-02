function moving(input) {
    let idx = 0;
    let w = Number(input[idx]);
    idx++;
    let l = Number(input[idx]);
    idx++;
    let h = Number(input[idx]);
    idx++;

    let capacity = w * l * h;

    let filled = 0;
    let box = input[idx];
    idx++;

    while (box !== "Done") {
        filled += Number(box);

        let box = input[idx];
        idx++;
    }

    diff = Math.abs(filled - capacity)

    if (filled > capacity) {
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    } else {
        console.log(`${diff} Cubic meters left.`);
    };
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"
])