function schoolGrades(array) {
    let result = new Map();

    for (let info of array) {
        info = info.split(" ");
        let name = info[0];
        let grades = [];

        for (let i of info.slice([1])) {
            grades.push(Number(i));
        }

        if (result.has(name)) {
            result.set(name, result.get(name).concat(grades));
            continue;
        }

        result.set(name, grades);
    }


    let sortedNames = Array.from(result.entries());
    sortedNames.sort(([keyA, valA], [keyB, valB]) => {
        return keyA.localeCompare(keyB);
    })

    for (let [k, v] of sortedNames) {
        v = calcAverage(v);
        console.log(`${k}: ${v.toFixed(2)}`);
    }

    function calcAverage(grades) {
        let average = 0;

        for (let grade of grades) {
            average += Number(grade);
        }

        average /= grades.length;

        return average;
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)