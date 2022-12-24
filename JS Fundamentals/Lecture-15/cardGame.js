function cardGame(array) {
    let namesAndCards = {};
    let cardPowers = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }

    while (array.length > 0) {
        let [name, cards] = array.shift().split(": ");
        cards = cards.split(", ");

        if (namesAndCards.hasOwnProperty(name)) {
            let oldCards = new Set(namesAndCards[name])
            for (let card of cards) {
                oldCards.add(card);
            }
            namesAndCards[name] = oldCards;
        } else {
            namesAndCards[name] = new Set(cards);
        }
    }

    for (let [name, points] of Object.entries(namesAndCards)) {
        let sum = calcSum(namesAndCards[name], cardPowers);
        console.log(`${name}: ${sum}`);
    }

    function calcSum(cards, values) {
        let sum = 0;
        for (let card of cards) {
            let firstPart = card.split("").slice(0, card.length - 1).join("")
            sum += values[firstPart] * values[card[card.length - 1]];
        }

        return sum;
    }
}

cardGame([
        'John: 2C, 4H, 9H, AS, QS',
        'Slav: 3H, 10S, JC, KD, 5S, 10S',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Slav: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'Alex: 6H, 7S, KC, KD, 5S, 10C',
        'Thomas: QH, QC, JS, JD, JC',
        'John: JD, JD, JD, JD'
    ]
)