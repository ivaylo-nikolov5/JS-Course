function oddOccurrences(words) {
    let occurrences = new Map();

    for (let word of words.split(" ")) {
        word = word.toLowerCase();

        if (!occurrences.has(word)) {
            occurrences.set(word, 1);
            continue;
        }

        let oldCount = occurrences.get(word);
        occurrences.set(word, oldCount + 1);
    }

    let result = [];

    for (let [word, occ] of occurrences) {
        if (occ % 2 !== 0) {
            result.push(word);
        }
    }
    console.log(result.join(" "));
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')