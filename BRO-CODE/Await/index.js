async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        return ("File loaded successfully!");
    } else {
        throw ("File NOT loaded!");
    }
}

async function startProcess() {
    try {
        let message = await loadFile();
        console.log(message);
    } catch (error) {
        console.log(error);
    }

}

startProcess();