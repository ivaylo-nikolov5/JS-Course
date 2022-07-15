function sumSeconds(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalTime = first + second + third;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime - minutes * 60;

    if (seconds >= 10) {
        console.log(`${minutes}:${seconds}`);
    } else {
        console.log(`${minutes}:0${seconds}`);
    }

}

sumSeconds(["14", "12",
    "10"
])