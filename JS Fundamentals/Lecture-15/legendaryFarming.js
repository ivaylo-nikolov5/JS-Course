function legendaryFarming(commands) {
    commands = commands.split(" ");
    let keyMaterials = {
        "shards": 0,
        "fragments": 0,
        "motes": 0,
    }

    let junkItems = {};
    let itemObtained = "";

    while (commands.length > 0) {
        let quantity = Number(commands.shift());
        let item = commands.shift().toLowerCase();

        if (keyMaterials.hasOwnProperty(item)) {
            keyMaterials[item] += quantity;
        } else if (junkItems.hasOwnProperty(item)) {
            junkItems[item] += quantity;
        } else {
            junkItems[item] = quantity;
        }

        itemObtained = checkObtainedItem(keyMaterials);

        if (itemObtained !== "") {
            break;
        }
    }

    keyMaterials = sortItems(keyMaterials);
    junkItems = sortAlpha(junkItems);

    console.log(`${itemObtained} obtained!`);

    for (let [item, quantity] of keyMaterials) {
        console.log(`${item}: ${quantity}`);
    }

    for (let [item, quantity] of junkItems) {
        console.log(`${item}: ${quantity}`);
    }


    function checkObtainedItem(keyMaterials) {
        let itemObtained = "";
        let requiredItems = 250;

        if (keyMaterials["shards"] >= requiredItems) {
            itemObtained = "Shadowmourne";
            keyMaterials["shards"] -= requiredItems
        } else if (keyMaterials["fragments"] >= requiredItems) {
            itemObtained = "Valanyr";
            keyMaterials["fragments"] -= requiredItems
        } else if (keyMaterials["motes"] >= requiredItems) {
            itemObtained = "Dragonwrath";
            keyMaterials["motes"] -= requiredItems;
        }

        return itemObtained;
    }

    function sortItems(items) {
        items = Object.entries(items).sort((a, b) => {
            let c = b[1] - a[1];
            let d = a[0].localeCompare(b[0]);

            return c || d;
        })

        return items;
    }

    function sortAlpha(items) {
        items = Object.entries(items).sort((a, b) => {
           return a[0].localeCompare(b[0]);
        })

        return items;
    }
}

legendaryFarming('249 motes 249 fragments 249 shards 5 fragments')