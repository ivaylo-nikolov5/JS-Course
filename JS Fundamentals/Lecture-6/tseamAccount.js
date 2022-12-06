function tseamAccount(array) {
    let games = array[0].split(" ");
    let idx = 1;
    let command = array[idx];

    while (command !== "Play!") {
        let currentCommand = command.split(" ")
        let action = currentCommand[0];
        let game = currentCommand[1];

        if (action === "Install" && !games.includes(game)) {
            games.push(game);
        } else if (action === "Uninstall" && games.includes(game)) {
            let gameIdx = games.indexOf(game);
            games.splice(gameIdx, 1);
        } else if (action === "Update" && games.includes(game)) {
            let gameIdx = games.indexOf(game);
            games.splice(gameIdx, 1);
            games.push(game);
        } else if (action === "Expansion" && games.includes(game.split("-")[0])) {
            let pair = game.split("-");
            let game_ = pair[0];
            let expansion = pair[1];
            let gameIdx = games.indexOf(game_);
            games.splice(gameIdx + 1, 0, `${game_}:${expansion}`);
        }
        idx++;
        command = array[idx];
    }

    console.log(games.join(" "));

}

tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']

)