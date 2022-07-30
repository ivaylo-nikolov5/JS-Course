function graduation(input) {
    let name = input[0];
    let grade = 1;
    let failedTimes = 0;
    let grades = 0
    while (grade <= 12) {
        let currentGrade = Number(input[grade]);

        if (currentGrade < 4) {
            failedTimes++;
        }

        if (failedTimes > 1) {
            console.log(`${name} has been excluded at ${grade - 1} grade`);
            break;
        }

        grades += currentGrade;
        grade++;

    }

    if (grade >= 12) {
        console.log(`${name} graduated. Average grade: ${(grades / 12).toFixed(2)}`);
    };
}

graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
])