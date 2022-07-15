function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = hours * 60 + minutes + 15;
    hours = Math.trunc(totalMinutes / 60);
    minutes = totalMinutes % 60;

    let result = "";

    if (hours < 24) {
        if (minutes >= 10) {
            result = (`${hours}:${minutes}`);
        } else {
            result = (`${hours}:0${minutes}`);
        }
    } else {
        if (minutes >= 10) {
            result = (`0:${minutes}`);
        } else {
            result = (`0:0${minutes}`);
        }
    }
    console.log(result);
}
timePlus15Minutes(["12", "49"])