function carWash(commands) {
    let cleanPercentage = 0;
    let commandIdx = 0;


    while (commandIdx < commands.length) {
        let currentCommand = commands[commandIdx];
        switch (currentCommand) {
            case "water": cleanPercentage = water(cleanPercentage); break;
            case "soap": cleanPercentage = soap(cleanPercentage); break;
            case "vacuum cleaner": cleanPercentage = vacuumCleaner(cleanPercentage); break;
            case "mud": cleanPercentage = mud(cleanPercentage); break;
        }
        commandIdx++;
    }

    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`)

    function soap(percentage) {
        return percentage + 10;
    }

    function water(percentage) {
        return percentage + percentage * 0.2;
    }

    function vacuumCleaner (percentage) {
        return percentage + percentage * 0.25;
    }

    function mud(percentage) {
        return percentage - percentage * 0.1;
    }

}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])