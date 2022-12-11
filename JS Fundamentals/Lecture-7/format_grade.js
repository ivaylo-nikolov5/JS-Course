function format_grade(grade) {
    let description = "";

    if (grade < 3) {
        description = "Fail";
        grade = 2;
    } else if (grade < 3.5) {
        description = "Poor";
    } else if (grade < 4.5) {
        description = "Good";
    } else if (grade < 5.5) {
        description = "Very good";
    } else {
        description = "Excellent";
    }

    description += ` (${grade >= 3? grade.toFixed(2): 2})`;
    console.log(description);
}

format_grade(2.99)