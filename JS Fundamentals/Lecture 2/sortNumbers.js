function sortNumbers(num1, num2, num3) {
    let max_num = Math.max(num1, num2, num3);
    let mid_num = null;
    let min_num = Math.min(num1, num2, num3);

    if (num1 === max_num && num2 === min_num) {
        mid_num = num3;
    } else if (num2 === max_num && num1 === min_num) {
        mid_num = num3;
    } else if (num2 === max_num && num3 === min_num) {
        mid_num = num1;
    } else if (num3 === max_num && num2 === min_num) {
        mid_num = num1;
    } else if (num1 === max_num && num3 === min_num) {
        mid_num = num2;
    } else if (num3 === max_num && num1 === min_num) {
        mid_num = num2;
    }

    console.log(max_num);
    console.log(mid_num);
    console.log(min_num);
}

sortNumbers(0,
    0,
    2
);