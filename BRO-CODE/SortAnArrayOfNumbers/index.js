let numbers = [2, 4, 1, 6, 32, 13, 54, 41, 65, 3, 5];
let sortedArray = numbers.sort(ascendingSort);

sortedArray.forEach(print);

function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}

function print(element) {
    console.log(element);
}