function dayOfWeek(number) {
    let days = ["Invalid day!", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

    let day = days[number] === undefined ? "Invalid day!" : days[number];

    console.log(day);
}

dayOfWeek(0)