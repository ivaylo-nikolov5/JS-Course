function trainTheTrainers(input) {
    let totalGradesSum = 0;
    let gradesCount = 0
    let idx = 0;
    let juryMembers = Number(input[idx]);
    idx++;
    let examName = input[idx];
    idx++;

    while (examName !== "Finish") {
        let gradesSum = 0;
        for (let i = 0; i < juryMembers; i++) {
            let grade = Number(input[idx])
            idx++;
            gradesSum += grade;
            totalGradesSum += grade;
            gradesCount += 1
        };

        let averageGrade = (gradesSum / juryMembers).toFixed(2);
        console.log(`${examName} - ${averageGrade}.`);

        examName = input[idx];
        idx++;

    };

    averageGrade = (totalGradesSum / gradesCount).toFixed(2);
    console.log(`Student's final assessment is ${averageGrade}.`);
};

trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"
])