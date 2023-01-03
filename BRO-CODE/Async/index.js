async function loadFile() {
    let fileLoaded = true;

    if (fileLoaded) {
        return ("File loaded successfully!");
    } else {
        throw ("File NOT loaded!");
    }
}

loadFile().then(value => console.log(value))
    .catch(error => console.log(error));