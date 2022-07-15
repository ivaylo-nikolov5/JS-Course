function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = (radians * 180) / Math.PI;

    console.log(Number(degrees));
}

radiansToDegrees(["6.2832"])