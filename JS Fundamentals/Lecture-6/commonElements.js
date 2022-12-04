function commonElements(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        let firstElement = array1[i];

        for (let j = 0; j < array2.length; j++) {
            let secondElement = array2[j];

            if (firstElement === secondElement) {
                console.log(firstElement);
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])
