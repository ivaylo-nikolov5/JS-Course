let numbers = [1, 3, 45, 6, 7, 12];
let numbersSum = numbers.reduce(sum);

console.log(`The sum of the array is: ${numbersSum}`);

function sum(total, element) {
    return total + element;
}