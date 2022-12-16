function treasureHunt(array) {
    let initialLoot = array.shift().split("|");
    let idx = 0;

    let command = array[idx];

    while (command !== "Yohoho!") {
        command = command.split(" ");
        let action = command[0];

        if (action === "Loot") {
            let items = command.slice(1);
            initialLoot = loot(initialLoot, items);

        } else if (action === "Drop") {
            let idx = Number(command[1]);
            initialLoot = drop(initialLoot, idx);

        } else if (action === "Steal") {
            let count = Number(command[1]);
            initialLoot = steal(initialLoot, count);
        }

        idx++;
        command = array[idx];
    }

    if (initialLoot.length === 0) {
        console.log("Failed treasure hunt.")
        return;
    }

    let averageGain = 0;

    for (let i = 0; i < initialLoot.length; i++) {
        averageGain += initialLoot[i].length;
    }

    averageGain /= initialLoot.length;

    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)

    function loot(initialLoot, items) {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            if (!initialLoot.includes(item)) {
                initialLoot.unshift(item);
            }
        }

        return initialLoot;
    }

    function drop(initialLoot, idx) {
        let item = initialLoot[idx];
        if (idx >= initialLoot.length || idx < 0) {
            return initialLoot;
        }

        let tempLoot = initialLoot;
        tempLoot = tempLoot.slice(0, idx);
        tempLoot = tempLoot.concat(initialLoot.slice(idx + 1));
        tempLoot.push(item);
        return tempLoot;
    }

    function steal(initialLoot, count) {
        let stolenItems = [];
        if (initialLoot.length <= count) {
            stolenItems = initialLoot;
            initialLoot = [];
            console.log(stolenItems.join(", "));
            return initialLoot;
        }

        stolenItems = initialLoot.slice(initialLoot.length - count);
        console.log(stolenItems.join(", "));
        initialLoot = initialLoot.slice(0, initialLoot.length - count);
        return initialLoot;
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
