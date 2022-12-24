function travelTime(array) {
    let townsAndPrices = {};

    while (array.length > 0) {
        let [country, town, price] = array.shift().split(" > ");
        price = Number(price);

        if (townsAndPrices.hasOwnProperty(country)) {
            if (!townsAndPrices[country].hasOwnProperty(town)) {
                townsAndPrices[country][town] = price;
                continue;
            }

            if (price < townsAndPrices[country][town]) {
                townsAndPrices[country][town] = price;
            }

        } else {
            townsAndPrices[country] = {};
            townsAndPrices[country][town] = price;
        }
    }

    townsAndPrices = Object.entries(townsAndPrices).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })

    for (let [country, towns] of townsAndPrices) {
        towns = Object.entries(towns).sort((a, b) => {
            return a[1] - b[1];
        })
        let result = `${country} ->`;
        for (let [town, price] of towns) {
            result += ` ${town} -> ${price}`;
        }

        console.log(result)
    }
}

travelTime([
        'Bulgaria > Sofia > 25000',
        'Bulgaria > Sofia > 25000',
        'Kalimdor > Orgrimar > 25000',
        'Albania > Tirana > 25000',
        'Bulgaria > Varna > 25010',
        'Bulgaria > Lukovit > 10'
    ]
)