function aMinerTask(array) {
    let resources = {};

    while (array.length > 0) {
        let resource = array.shift();
        let quantity = Number(array.shift());

        if (resources.hasOwnProperty(resource)) {
            resources[resource] += quantity;
        } else {
            resources[resource] = quantity;
        }
    }

    for (let [resource, quantity] of Object.entries(resources)) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask([
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
)