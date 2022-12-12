function loadingBar(percentage) {
    let loadingBar = [];
    let completed = false;

    for (let i = 0; i < percentage; i += 10) {
        loadingBar.push("%");
    }

    while (loadingBar.length < 10) {
        loadingBar.push(".")
    }

    if (loadingBar[loadingBar.length - 1] === "%") {
        completed = true;
    }

    if (completed) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
        return;
    }

    console.log(`${percentage}% [${loadingBar.join("")}]`);
    console.log("Still loading...");
}

loadingBar(100)