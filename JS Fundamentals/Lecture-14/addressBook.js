function addressBook(array) {
    let addressBook = {};

    while (array.length > 0) {
        let [name, address] = array.shift().split(":");
        addressBook[name] = address;
    }

    let sortedKeys = Object.keys(addressBook);
    sortedKeys.sort();

    for (let name of sortedKeys) {
        console.log(`${name} -> ${addressBook[name]}`);
    }

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)