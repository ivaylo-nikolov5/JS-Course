function listOfProducts(products) {
    let sortedProducts = products.sort();

    for (let i = 1; i <= products.length; i++) {
        console.log(`${i}.${sortedProducts[i - 1]}`);
    }
}

listOfProducts(['Watermelon', 'Banana', 'Apples'])