function excellentResult(input) {
    let grade = Number(input[0]);

    if (grade >= 5.5) {
        console.log("Excellent!");
    } else {
        console.log("Not Excellent!");
    }
}

excellentResult(["5.45"])