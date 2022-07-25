function oscars(input) {
    let name = input[0];
    let academyPoints = Number(input[1]);
    let raters = Number(input[2]);

    let totalPoints = academyPoints;

    for (let i = 3; i <= raters * 2 + 2; i += 2) {
        let rater = input[i].length;
        let points = Number(input[i + 1])

        totalPoints += (rater * points) / 2

        if (totalPoints >= 1250.5) {
            break;
        }
    }

    diff = Math.abs(totalPoints - 1250.5);

    if (totalPoints >= 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }

};