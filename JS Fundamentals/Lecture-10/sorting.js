function sorting(array) {
    array = array.sort((a, b) => {
        return a - b;
    }).reverse()
    let sortedArray = [];

    while (array.length > 0) {
        sortedArray.push(array.shift());

        if (array.length === 0) {
            break;
        }

        sortedArray.push(array.pop());
    }



    console.log(sortedArray.join(" "))
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);