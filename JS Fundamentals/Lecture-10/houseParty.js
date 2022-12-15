function houseParty(array) {
    let idx = 0;
    let guests = [];

    while (idx < array.length) {
        let command = array[idx].split(" ");
        let guestName = command[0];
        if (command.length === 3) {
            if (!guests.includes(guestName)) {
                guests.push(guestName);
                idx++;
                continue;
            }

            console.log(`${guestName} is already in the list!`);
            idx++;
            continue;
        }

        if (guests.includes(guestName)) {
            let guestIdx = guests.indexOf(guestName);
            guests.splice(guestIdx);
            idx++;
            continue;
        }

        console.log(`${guestName} is not in the list!`);
        idx++;
    }

    console.log(guests.join("\n"));

}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);