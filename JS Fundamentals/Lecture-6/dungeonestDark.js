function dungeonestDark(array) {
    array = array[0].split("|");
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let isDead = false;

    for (let i = 0; i < array.length; i++) {
        bestRoom += 1;
        let currentRoom = array[i].split(" ");
        let firstPart = currentRoom[0];
        let number = Number(currentRoom[1]);

        if (firstPart === "potion") {
            let healedFor = 0;
            if (health + number > 100) {
                healedFor = 100 - health;
                health = 100;
            } else {
                healedFor = number;
                health += number;
            }

            console.log(`You healed for ${healedFor} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (firstPart === "chest") {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;

            if (health <= 0) {
                isDead = true;
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            } else {
                console.log(`You slayed ${firstPart}.`)
            }
        }


    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])