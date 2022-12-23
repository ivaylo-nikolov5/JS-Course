function piccolo(array) {
    let parking = new Map();

    while (array.length > 0) {
        let [action, carNumber] = array.shift().split(", ");

        if (action === "IN") {
           parking.set(carNumber, "in")
        } else {
           if (!parking.has(carNumber)) {
               continue;
           }
           parking.delete(carNumber);
        }
    }

    parking = Array.from(parking.entries()).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })

    if (parking.length === 0) {
        console.log("Parking Lot is Empty");
        return
    }

    for (let [car, i] of parking) {
        console.log(car);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)