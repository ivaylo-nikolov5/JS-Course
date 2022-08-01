function steps(input) {
    let goal = 10000;
    let walkedSteps = 0;
    let idx = 0;

    let steps = input[idx];
    idx++;

    while (walkedSteps < goal) {
        if (steps === "Going home") {
            walkedSteps += Number(input[idx]);
            break;
        };

        steps = Number(steps);
        walkedSteps += steps

        steps = input[idx];
        idx++
    };

    let diff = Math.abs(walkedSteps - goal)

    if (walkedSteps >= goal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    };
};

steps(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"
])