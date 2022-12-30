let ages = [1, 4, 18, 15, 43, 54, 26, 12];
let filteredAges = ages.filter(checkAge);

filteredAges.forEach(print);

function checkAge(element) {
    return element >= 18;
}

function print(element) {
    console.log(element);
}