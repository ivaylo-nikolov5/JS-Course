function computerStore(array) {
    let priceWithoutTaxes = 0;
    let clientType = "";

    while (array.length > 0) {
        let currentPrice = array.shift();

        if (isNaN(Number(currentPrice))) {
            clientType = currentPrice;
            break;
        } else if (Number(currentPrice) <= 0) {
            console.log("Invalid price!");
            continue;
        }

        priceWithoutTaxes += Number(currentPrice);
    }

    if (priceWithoutTaxes <= 0) {
        console.log(`Invalid order!`);
        return;
    }

    let taxes = priceWithoutTaxes * 0.2;
    let totalPrice = priceWithoutTaxes + taxes;

    if (clientType === "special") {
        totalPrice -= totalPrice * 0.1;
    }

    printReceipt(priceWithoutTaxes, taxes, totalPrice);

    function printReceipt (priceWithoutTaxes, taxes, totalPrice) {
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------")
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }

}

computerStore([
    'regular'
])


