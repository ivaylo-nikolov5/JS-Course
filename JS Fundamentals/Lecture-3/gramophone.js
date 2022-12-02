function gramophone(albumName, bandName, songName) {
    let spins = Math.ceil(((albumName.length * bandName.length) * songName.length / 2) / 2.5);
    console.log(`The plate was rotated ${spins} times.`);
}

gramophone('Rammstein', 'Sehnsucht', 'Engel')