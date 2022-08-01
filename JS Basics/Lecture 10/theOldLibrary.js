function theOldLibrary(input) {
    let index = 0;
    let searchedBook = input[index];

    let isFound = false;
    let checkedBooks = 0;

    index++;
    let book = input[index];
    index++

    while (book !== "No More Books") {
        if (book === searchedBook) {
            isFound = true;
            break;
        }

        checkedBooks += 1;
        book = input[index];
        index++;

    };
    if (isFound === true) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`);
    }

};

theOldLibrary(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"
])