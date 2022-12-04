function magicSum(array, number) {
    let pairs = [];

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] + array[j] === number) {
                pairs.push(`${array[i]} ${array[j]}`);
            }

        }

    }

    console.log(pairs.join("\n"));
}

magicSum([1, 2, 3, 4, 5, 6],
    6
)