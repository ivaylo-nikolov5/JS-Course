function oscars(input) {
    let idx = 0;
    let actorName = input[idx];
    idx++;
    let academyPoints = Number(input[idx]);
    idx++;
    let juryMembers = Number(input[idx]);
    idx++;

    let juryMember = input[idx];
    idx++;
    let points = Number(input[idx]);
    idx++;

    for (let i = 0; i < juryMembers; i++) {
        juryMember = juryMember.length
        academyPoints += (juryMember * points) / 2

        if (academyPoints >= 1250.5) {
            break;
        }

        juryMember = input[idx];
        idx++;
        points = Number(input[idx]);
        idx++;

    };

    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    } else {
        let neededPoints = Math.abs(academyPoints - 1250.5)
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
    };
}

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
])