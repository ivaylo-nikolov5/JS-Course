function building(input) {
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let floor = floors; floor > 0; floor--) {
        let currentFloor = "";
        for (let room = 0; room < roomsPerFloor; room++) {
            if (floor === floors) {
                currentFloor += `L${floor}${room} `;
            } else if (floor % 2 == 0) {
                currentFloor += `O${floor}${room} `;
            } else {
                currentFloor += `A${floor}${room} `;
            }

        };

        console.log(currentFloor);
    }
};

building(["9", "5"])