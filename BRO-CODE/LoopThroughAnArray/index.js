let numbers = [1, 2, 3, 4, 5, 6, 7];

// First way

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Second way

for (let num of numbers) {
    console.log(num);
}