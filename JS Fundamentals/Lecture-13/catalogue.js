function catalogue(array) {
    let products = [];

    while(array.length > 0) {
        let currentPair = array.shift().split(" : ");
        let productName = currentPair[0];
        let price = Number(currentPair[1]);

        let product = {
            productName,
            price,
        }

        products.push(product);
    }

    products = products.sort((a, b) => {
        return a.productName.localeCompare(b.productName)
    })


    let letter = products[0].productName.slice(0, 1);
    console.log(letter);
    while (products.length > 0) {
        let currentProduct = products.shift();
        let currentLetter = currentProduct.productName.slice(0, 1);

        if (currentLetter !== letter) {
            console.log(currentLetter);
            letter = currentLetter;
        }

        console.log(`  ${currentProduct.productName}: ${currentProduct.price}`);
    }
}

catalogue([
        'Omlet : 5.4',
        'Shirt : 15',
        'Cake : 59'
    ]
)