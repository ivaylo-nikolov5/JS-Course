function bonusScoringSystem(array) {
    let lectures = Number(array[1]);
    let additionalBonus = Number(array[2]);

    let idx = 3;
    let highestBonus = 0;
    let maxAttendances = 0;

    while (idx < array.length) {
        let attendance = Number(array[idx]);
        let bonus = Math.round(attendance / lectures * (5 + additionalBonus));

        if (bonus > highestBonus) {
            highestBonus = bonus;
            maxAttendances = attendance;
        }
        idx++;
    }

    console.log(`Max Bonus: ${highestBonus}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem([
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
    ]
)