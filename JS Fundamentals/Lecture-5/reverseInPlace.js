function reverseInPlace(array) {
    // let reversedArray = array.reverse();
    // console.log(reversedArray.join(" "));

    // let reversedArray = [];
    //
    // for (let i = array.length - 1; i >= 0; i--) {
    //     reversedArray.push(array[i]);
    // }
    // console.log(reversedArray.join(" "));

    let reversedArray = [];

    while (array.length > 0) {
        let currentItem = array.pop();
        reversedArray.push(currentItem);
    }

    console.log(reversedArray.join(" "));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);