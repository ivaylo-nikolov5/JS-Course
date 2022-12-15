function gladiatorInventory(commands) {
    let inventory = commands[0].split(" ");
    let idx = 1;

    while (idx < commands.length) {
        let command = commands[idx].split(" ");
        let action = command[0];
        let equipment = command[1];

        if (action === "Buy") {
            inventory = buy(inventory, equipment);
        } else if (action === "Trash") {
            inventory = trash(inventory, equipment);
        } else if (action === "Repair") {
            inventory = repair(inventory, equipment);
        } else if (action === "Upgrade") {
            let explode = equipment.split("-");
            let upg = explode[1];
            equipment = explode[0];
            inventory = upgrade(inventory, equipment, upg);
        }

        idx++;
    }

    console.log(inventory.join(" "))

    function buy(inventory, equipment) {
        if (!inventory.includes(equipment)) {
            inventory.push(equipment);
        }

        return inventory;
    }

    function trash(inventory, equipment) {
        if (inventory.includes(equipment)) {
            let idx = inventory.indexOf(equipment);
            inventory = inventory.slice(0, idx).concat(inventory.slice(idx + 1));
        }

        return inventory;
    }

    function repair(inventory, equipment) {
        if (inventory.includes(equipment)) {
            let idx = inventory.indexOf(equipment);
            inventory = inventory.slice(0, idx).concat(inventory.slice(idx + 1));
            inventory.push(equipment);
        }

        return inventory;
    }

    function upgrade(inventory, equipment, upgrade) {
        let tempInventory = inventory;
        if (inventory.includes(equipment)) {
            let idx = inventory.indexOf(equipment);
            tempInventory = tempInventory.slice(0, idx + 1);
            tempInventory.push(`${equipment}:${upgrade}`);
            tempInventory = tempInventory.concat(inventory.slice(idx + 1));
        }

        return tempInventory;
    }
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)