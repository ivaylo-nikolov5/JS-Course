function phoneBook(array) {
    let phoneBook = {};

    while (array.length > 0) {
        let [name, number] = array.shift().split(" ");
        phoneBook[name] = number;
    }

    for (let person in phoneBook) {
        console.log(`${person} -> ${phoneBook[person]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)
