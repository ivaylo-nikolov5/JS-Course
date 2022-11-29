function login(input) {
    let username = input[0];
    let correctPassword = "";
    let logged = false;

    for (let i = (username.length) - 1; i >= 0; i--) {
        correctPassword += username[i];
    }

    for (let attempt = 1; attempt <= 4; attempt++) {
        if (input[attempt] === correctPassword) {
            console.log(`User ${username} logged in.`);
            logged = true;
            break;
        } else {
            if (attempt == 4) {
                break;
            }
            console.log("Incorrect password. Try again.");
        }

    }

    if (!logged) {
        console.log(`User ${username} blocked!`);
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);