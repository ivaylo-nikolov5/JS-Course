function sortAnArrayBy2Criteria(array) {
    let sortedArray = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })

    console.log(sortedArray.join("\n"));
}

sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])