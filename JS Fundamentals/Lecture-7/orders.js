function orders(product, quantity) {
    let priceForOneProduct = 0;

    switch (product) {
        case "water": priceForOneProduct = 1; break;
        case "coffee": priceForOneProduct = 1.5; break;
        case "coke": priceForOneProduct = 1.4; break;
        case "snacks": priceForOneProduct = 2; break;
    }

    console.log((quantity * priceForOneProduct).toFixed(2));
}

orders("water", 5);