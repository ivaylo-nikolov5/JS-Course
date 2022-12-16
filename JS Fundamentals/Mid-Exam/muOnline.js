function muOnline(commands) {
    commands = commands.split("|");

    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;

    while (commands.length > 0) {
        let currentCommand = commands.shift().split(" ");
        let action = currentCommand[0];
        let value = Number(currentCommand[1]);
        bestRoom++;

        if (action === "potion") {
            health = potion(health, value);
        } else if (action === "chest") {
            bitcoins = chest(bitcoins, value);
        } else {
            health = fight(health, action, value);

            if (health === 0) {
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

    function potion(health, value) {
        let amount = 0;
        if (health + value > 100) {
            amount = 100 - health;
            health = 100;
        } else {
            amount = value;
            health += value;
        }

        console.log(`You healed for ${amount} hp.`);
        console.log(`Current health: ${health} hp.`);
        return health;
    }

    function chest(bitcoins, bitcoinsFound) {
        bitcoins += bitcoinsFound;
        console.log(`You found ${bitcoinsFound} bitcoins.`);
        return bitcoins;
    }

    function fight(health, monster, damage) {
        health -= damage;

        if (health <= 0) {
            health = 0;
            console.log(`You died! Killed by ${monster}.`);
            return health;
        }

        console.log(`You slayed ${monster}.`);
        return health;
    }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")