function inventory(array) {
    let heroes = [];

    while (array.length > 0) {
        let info = array.shift().split(" / ");
        let name = info[0];
        let level = Number(info[1]);
        let items = info[2].split(", ");

        let hero = {
            name,
            level,
            items,
        }

        heroes.push(hero);
    }

    heroes = heroes.sort((a, b) => {
        return a.level - b.level;
    })

    while (heroes.length > 0) {
        let hero = heroes.shift();

        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

inventory([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
)