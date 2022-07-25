function tennisRanklist(input) {
    let tournaments = Number(input[0]);
    let startPoints = Number(input[1]);
    let points = 0;
    let wins = 0;

    for (i = 2; i <= input.length + 1; i++) {
        let tournament = input[i];

        switch (tournament) {
            case "W":
                points += 2000, wins += 1;
                break;
            case "F":
                points += 1200;
                break;
            case "SF":
                points += 720;
                break;
        };

    }

    console.log(`Final points: ${points + startPoints}`);
    console.log(`Average points: ${Math.floor(points / tournaments)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);
}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"
])