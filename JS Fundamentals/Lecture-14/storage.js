function storage(array) {
    let products = new Map();

    while (array.length > 0) {
        let [product, quantity] = array.shift().split(" ");
        quantity = Number(quantity);
        if (products.has(product)) {
            products.set(product, products.get(product) + quantity);
        } else {
            products.set(product, quantity);
        }

    }

    for (let [product, quantity] of products.entries()) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)