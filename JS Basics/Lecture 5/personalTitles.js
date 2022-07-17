function personalTitles(input) {
    let age = Number(input[0]);
    let gender = input[1];
    let res = ""
    switch (gender) {
        case "m":
            if (age < 16) {
                res = "Master"
            } else {
                res = "Mr."
            }
            break;
        case "f":
            if (age < 16) {
                res = "Miss"
            } else {
                res = "Ms."
            }
            break;
    };
    console.log(res);
};

personalTitles(["17",
    "m"
])