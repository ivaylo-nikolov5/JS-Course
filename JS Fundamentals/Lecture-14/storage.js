function storage(array) {
    let products = {};

    while (array.length > 0) {
        let [product, quantity] = array.shift().split(" ");

        if (products[product] !== undefined) {
            products[product] += Number(quantity);
            continue;
        }

        products[product] = Number(quantity);
    }

    for (let [product, quantity] of Object.entries(products)) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)