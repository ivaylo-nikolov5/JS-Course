function songs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    for (let i = 1; i < array.length - 1; i++) {
        let currentSong = array[i].split("_");
        let list = currentSong[0];
        let name = currentSong[1];
        let time = currentSong[2];

        let song = new Song(list, name, time);
        songs.push(song);
    }

    let type = array[array.length - 1];

    if (type === "all") {
        for (let i = 0; i < songs.length; i++) {
            console.log(songs[i].name);
        }
        return;
    }

    for (let i = 0; i < songs.length; i++) {
        let song = songs[i];

        if (song.typeList === type) {
            console.log(song.name);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)
