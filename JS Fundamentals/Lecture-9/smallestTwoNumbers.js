function smallestTwoNumbers(array) {
    let sortedInAscending = array.sort((a, b) => {
       return a - b;
    });

    console.log(array.slice(0, 2).join(" "));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3])