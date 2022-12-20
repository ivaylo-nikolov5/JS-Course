function wordOccurrences(array) {
    let occurrences = {};

    for (let word of array) {
        if (!occurrences.hasOwnProperty(word)) {
            occurrences[word] = 1;
            continue;
        }

        occurrences[word] += 1;
    }

    let tuples = [];
    for (let word in occurrences) tuples.push([word, occurrences[word]]);

    tuples.sort((a, b) => {
        a = a[1];
        b = b[1];

        return a > b ? -1: 0;
    })

    for (let pair of tuples) {
        console.log(`${pair[0]} -> ${pair[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])