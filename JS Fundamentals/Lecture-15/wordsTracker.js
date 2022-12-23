function wordsTracker(array) {
    let result = new Map();
    let targets = array.shift().split(" ");

    for (let target of targets) {
        result.set(target, 0);
    }

    while (array.length) {
        let currentWord = array.shift();
        if (!targets.includes(currentWord)) {
            continue
        }

        let oldCount = result.get(currentWord)
        result.set(currentWord, oldCount + 1);
    }

    let sortedResult = Array.from(result.entries()).sort((a, b) => {
        return b[1] - a[1];
    })

    for (let [k, v] of sortedResult) {
        console.log(k, "-", v);
    }
}

wordsTracker([
    'is the for',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence', 'the', 'the', 'the', 'the']
)