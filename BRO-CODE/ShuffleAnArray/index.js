let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
shuffleCards(cards);
cards.forEach((element) => console.log(element));


function shuffleCards(array) {
    let currentIdx = array.length;

    while (currentIdx !== 0) {
        let randomIdx = Math.floor(Math.random() * array.length);
        currentIdx -= 1;

        let temp = array[currentIdx];
        array[currentIdx] = array[randomIdx];
        array[randomIdx] = temp;
    }

    return array;
}