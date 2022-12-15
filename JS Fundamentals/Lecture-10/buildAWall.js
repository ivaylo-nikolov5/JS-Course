function buildAWall(array) {
    let concrete = 0;
    let days = [];

    while (arraySum(array) < array.length * 30) {
        let currentDay = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                array[i] += 1;
                currentDay += 195;
                concrete += 195;
            }
        }

        days.push(currentDay);

    }

    console.log(days.join(", "));
    console.log(`${concrete * 1900} pesos`)

    function arraySum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum;
    }
}

buildAWall([17]);
