function searchForANumber(arr1, arr2) {
    let numberOfElements = arr2[0];
    let numberOfElementsToDelete = arr2[1];
    let target = arr2[2];

    let occurrences = 0;

    let newArr = arr1.slice(0, numberOfElements);
    newArr = newArr.slice(numberOfElementsToDelete);

    for (let i = 0; i < newArr.length; i++) {
        if (target === newArr[i]) {
            occurrences++;
        }
    }
    console.log(`Number ${target} occurs ${occurrences} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)