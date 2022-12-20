function schoolGrades(array) {
    let students = {};

    while (array.length > 0) {
        let student = array.shift().split(" ");
        let name = student[0];
        let averageGrade = 0;

        for (let grade of student.slice(1)) {
            averageGrade += Number(grade);
        }

        averageGrade /= student.slice(1).length;

        if (students[name] === undefined) {
            students[name] = averageGrade;
            continue;
        }

        students[name] = (students[name] + averageGrade) / 2;
    }

    let sortedKeys = Object.keys(students);
    sortedKeys = sortedKeys.sort();

    for (let name of sortedKeys) {
        console.log(`${name}: ${students[name].toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)