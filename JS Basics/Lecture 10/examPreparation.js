function examPreparation(input) {
    let idx = 0;
    let receivedBadGrades = 0;
    let grades = 0;
    let gradesCount = 0;
    let failed = false;
    let lastProblem = "";

    let allowedBadGrades = Number(input[idx]);
    idx += 2;
    let problem = input[idx - 1];
    let grade = Number(input[idx]);

    while (problem !== "Enough") {
        if (receivedBadGrades === allowedBadGrades) {
            failed = true;
            break;
        } else if (grade <= 4) {
            receivedBadGrades += 1;
        }

        gradesCount += 1;
        grades += grade;
        lastProblem = problem;
        idx += 2;
        problem = input[idx - 1];
        grade = Number(input[idx]);
    }

    if (failed === true) {
        console.log(`You need a break, ${receivedBadGrades} poor grades.`);
    } else {
        let averageScore = grades / gradesCount
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastProblem}`);
    };


};

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
])