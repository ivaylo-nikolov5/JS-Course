function movies(array) {

    class Movie {
        constructor(name) {
            this.name = name;
        }
    }

    let movies = [];

    while (array.length > 0) {
        let command = array.shift().split(" ");
        let action = command[0];

        if (action === "addMovie") {
            let movieName = command.slice(1).join(" ");
            let movie = new Movie(movieName);
            movies.push(movie);
            continue;
        }

        let actionIdx = 0;

        for (let i = 0; i < command.length; i++) {
            let currentPiece = command[i];

            if (currentPiece === "directedBy" || currentPiece === "onDate") {
                actionIdx = i;
            }
        }

        let movieName = command.slice(0, actionIdx).join(" ");

        if (command[actionIdx] === "directedBy") {
            let director = command.slice(actionIdx + 1).join(" ");

            let movie = checkIfMovieExists(movies, movieName);

            if (movie !== "None") {
                movie.director = director;
            }

        } else {
            let date = command[command.length - 1];

            let movie = checkIfMovieExists(movies, movieName);

            if (movie !== "None") {
                movie.date = date;
            }

        }


    }

    while (movies.length > 0) {
        let movie = movies.shift();

        if (movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    }


    function checkIfMovieExists(movies, movieName) {
        for (let i = 0; i < movies.length; i++) {
            let currentMovie = movies[i];

            if (currentMovie.name === movieName) {
                return currentMovie;
            }
        }

        return "None";
    }
}

movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)