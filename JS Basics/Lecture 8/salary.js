function salary(input) {
    let tabs = Number(input[0]);
    let currentSalary = Number(input[1]);

    for (let i = 2; i <= tabs + 1; i++) {
        if (currentSalary <= 0) {
            break;
        }

        let currentTab = input[i];
        switch (currentTab) {
            case "Facebook":
                currentSalary -= 150;
                break;
            case "Instagram":
                currentSalary -= 100;
                break;
            case "Reddit":
                currentSalary -= 50;
                break
        }
    }

    if (currentSalary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(currentSalary);
    };
};

salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"
])