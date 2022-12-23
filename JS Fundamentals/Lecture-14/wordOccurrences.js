function wordOccurrences(array) {
    let occurrences = new Map();

    while (array.length > 0) {
        let word = array.shift();

        if (occurrences.has(word)) {
            let currentWordOccurrences = occurrences.get(word);
            occurrences.set(word, currentWordOccurrences + 1);
        } else {
            occurrences.set(word, 1);
        }
    }

    let sorted = Array.from(occurrences.entries());
    sorted.sort(([keyA, valA], [keyB, valB]) => {
        return valB - valA ;
    })


    for (let [k, v] of sorted) {
        console.log(k, "->", v, "times")
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])