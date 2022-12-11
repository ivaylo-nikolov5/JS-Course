function signCheck(num1, num2, num3) {
    let nums = [num1, num2, num3];
    let sign = "Positive";
    let minuses = 0;

    for (let i = 0; i < 3; i++) {
        if (nums[i] < 0) {
            minuses++;
        }
    }

    if (minuses % 2 === 1) {
        sign = "Negative";
    }

    console.log(sign);


}

signCheck( -6,
    -12,
    -14
)