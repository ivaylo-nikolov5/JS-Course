function shoping(input) {
    let budget = Number(input[0]);
    let gpus = Number(input[1]);
    let cpus = Number(input[2]);
    let ram = Number(input[3]);

    let gpusPrice = gpus * 250;
    let cpusPrice = gpusPrice * 0.35 * cpus;
    let ramPrice = gpusPrice * 0.1 * ram;

    let totalPrice = gpusPrice + cpusPrice + ramPrice

    if (gpus > cpus) {
        totalPrice -= totalPrice * 0.15
    }

    if (budget >= totalPrice) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}

shoping(["920.45",
    "3",
    "1",
    "1"
])