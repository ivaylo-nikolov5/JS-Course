function mountainRun(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let totalSeconds = distanceInMeters * secondsPerMeter;
    let addedSeconds = Math.trunc(distanceInMeters / 50) * 30;
    totalSeconds += addedSeconds;

    if (recordInSeconds <= totalSeconds) {
        let diff = Math.abs(recordInSeconds - totalSeconds);
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalSeconds.toFixed(2)} seconds.`);
    };
}

mountainRun(["5554.36",
    "1340",
    "3.23"
])