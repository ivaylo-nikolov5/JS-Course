let numbers = [1, 2, 3, 4, 5];

let numbersSquare = numbers.map(square);

numbersSquare.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function print(element) {
    console.log(element);
}