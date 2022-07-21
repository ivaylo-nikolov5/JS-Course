function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let first = Number(examHour * 60 + examMinutes);
    let second = Number(arrivalHour * 60 + arrivalMinutes);

    let diff = Math.abs(first - second);

    if (first < second) {
        console.log("Late");
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let hours = Math.floor(diff / 60)
            let minutes = diff - hours * 60
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }

    } else if (first - second <= 30) {
        console.log("On time");
        console.log(`${diff} minutes before the start`);

    } else {
        console.log("Early");
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else {
            let hours = Math.floor(diff / 60)
            let minutes = diff - hours * 60
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }

    }
}

onTimeForTheExam(["14",
    "00",
    "13",
    "55"
])