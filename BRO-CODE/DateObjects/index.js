// let date = new Date(1000000000000);
// date = date.toLocaleString();
// console.log(date);

// let date = new Date(2023, 0, 2, 3, 4, 5).toLocaleString();
//let date = new Date("January 2, 2023 00:00:00").toLocaleString();

let date = new Date();

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliseconds = date.getMilliseconds();

// date.setFullYear(2024);
// date.setMonth(5);
// date.setDate(3);
// date.setHours(12);
// date.setSeconds(50);
// date.setMinutes(43);

document.getElementById("dateLabel").innerHTML = formatDate(date) + " " + formatTime(date);

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeType = hours >= 0 && hours < 12 ? "AM" : "PM";
    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${timeType}`;
}