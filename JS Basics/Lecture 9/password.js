function password(input) {
    let user = input[0];
    let userPassword = input[1];
    let attempt = 2

    while (input.length - 2) {
        if (input[attempt] === userPassword) {
            console.log(`Welcome ${user}!`);
            break;
        }

        attempt++
    };
};

password(["Gosho",
    "secret",
    "secret"
])