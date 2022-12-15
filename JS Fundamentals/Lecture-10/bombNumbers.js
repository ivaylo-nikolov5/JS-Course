function bombNumbers(numbers, bombs) {
    let bombNumber = bombs[0];
    let power = bombs[1];

    let bombIdx = numbers.indexOf(bombNumber);
    let exploded = numbers;

    for (let i = 0; i < numbers.length; i++) {
        if (bombIdx !== undefined) {
            exploded = exploded.slice(0, bombIdx - power).concat(exploded.slice(bombIdx + power + 1))
        }

        bombIdx = undefined;
        if (exploded[i] === bombNumber) {
            bombIdx = i;
        }
    }

    let sum = 0;

    while (exploded.length > 0) {
        sum += exploded.pop();
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)