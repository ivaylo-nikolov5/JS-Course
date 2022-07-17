function workingHours(input) {
    let hour = Number(input[0])
    let day = input[1]
    let res = ""
    if (day === "Sunday") {
        res = "closed"
    } else {
        if (hour >= 10 && hour <= 18) {
            res = "open"
        } else {
            res = "closed"
        }
    }
    console.log(res);
};

workingHours(["14",
    "Friday"
])