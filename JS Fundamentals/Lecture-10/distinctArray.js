function distinctArray(array) {
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (filteredArray.includes(array[i])) {
            continue;
        }

        filteredArray.push(array[i]);
    }

    console.log(filteredArray.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])