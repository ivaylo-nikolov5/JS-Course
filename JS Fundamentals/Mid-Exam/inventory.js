function inventory(array) {
    let items = array[0].split(", ");
    let idx = 1;

    while (idx < array.length -1) {
        let currentCommand = array[idx].split(" - ");
        let action = currentCommand[0];
        let item = currentCommand[1];

        if (action === "Collect") {
            items = collect(items, item);
        } else if (action === "Drop") {
            items = drop(items, item);
        } else if (action === "Combine Items") {
            items = combineItems(items, item);
        } else if (action === "Renew") {
            items = renew(items, item);
        }

        idx++
    }

    console.log(items.join(", "));

    function collect(items, item) {
        if (!items.includes(item)) {
            items.push(item);
        }

        return items;
    }

    function drop(items, item) {
        if (!items.includes(item)) {
            return items;
        }

        let itemIdx = items.indexOf(item);
        items = items.slice(0, itemIdx).concat(items.slice(itemIdx + 1));
        return items;
    }

    function combineItems(items, item) {
        item = item.split(":");

        let oldItem = item[0];
        let newItem = item[1];

        if (!items.includes(oldItem)) {
            return items;
        }

        let oldItemIdx = items.indexOf(oldItem);
        let tempItems = items;

        tempItems = tempItems.slice(0, oldItemIdx + 1);
        tempItems.push(newItem);
        tempItems = tempItems.concat(items.slice(oldItemIdx + 1));

        return tempItems;
    }

    function renew(items, item) {
        if (!items.includes(item)) {
            return items;
        }

        let itemIdx = items.indexOf(item);
        let tempItems = items;

        tempItems = tempItems.slice(0, itemIdx);
        tempItems = tempItems.concat(items.slice(itemIdx + 1));
        tempItems.push(item);
        return tempItems;
    }
}

inventory([
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]
)