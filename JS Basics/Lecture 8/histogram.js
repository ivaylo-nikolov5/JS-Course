function histogram(input) {
    let under200 = 0;
    let to399 = 0;
    let to599 = 0;
    let to799 = 0;
    let moreThan800 = 0;
    let total = input.length - 1

    for (let i = 1; i < input.length; i += 1) {
        n = Number(input[i])
        if (n < 200) {
            under200 += 1
        } else if (n < 400) {
            to399 += 1
        } else if (n < 600) {
            to599 += 1
        } else if (n < 800) {
            to799 += 1
        } else {
            moreThan800 += 1
        }
    }
    console.log(`${((under200 / total) * 100).toFixed(2)}%`);
    console.log(`${((to399 / total) * 100).toFixed(2)}%`);
    console.log(`${((to599 / total) * 100).toFixed(2)}%`);
    console.log(`${((to799 / total) * 100).toFixed(2)}%`);
    console.log(`${((moreThan800 / total) * 100).toFixed(2)}%`);
}