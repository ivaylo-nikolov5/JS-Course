function train(array) {
    let wagons = [];
    let tempWagons = array[0].split(" ");
    for (let i = 0; i < tempWagons.length; i++) {
        wagons.push(Number(tempWagons[i]));
    }

    let maxWagonCapacity = Number(array[1]);
    let idx = 2;

    while (idx < array.length) {
        let command = array[idx].split(" ");

        if (command.length === 2) {
            wagons.push(Number(command[1]));
            idx++;
            continue;
        }

        let passengers = Number(command[0]);

        for (let i = 0; i < wagons.length; i++) {
            let currentWagon = wagons[i];
            let currentCapacity = maxWagonCapacity - currentWagon;

            if (currentCapacity >= passengers) {
                wagons[i] += passengers;
                break;
            }

        }

        idx++;
    }

    console.log(wagons.join(" "));

}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)