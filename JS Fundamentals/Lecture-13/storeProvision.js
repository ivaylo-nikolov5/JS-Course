function storeProvision(array1, array2) {
    let products = [];

    while (array1.length > 0) {
        let currentProduct = array1.shift();
        let currentProductQuantity = Number(array1.shift());

        let product = {
            name: currentProduct,
            quantity: currentProductQuantity,
        }

        products.push(product);
    }

    while (array2.length > 0) {
        let currentProduct = array2.shift();
        let currentProductQuantity = Number(array2.shift());

        let product = {
            name: currentProduct,
            quantity: currentProductQuantity,
        }

        let alreadyIn = false;

        for (let i = 0; i < products.length; i++) {
            let currentProduct = products[i];

            if (currentProduct.name === product.name) {
                currentProduct.quantity += product.quantity;
                alreadyIn = true;
            }
        }

        if (!alreadyIn) {
            products.push(product);
        }


    }

    while (products.length > 0) {
        let product = products.shift();

        console.log(`${product.name} -> ${product.quantity}`);
    }
}

storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)