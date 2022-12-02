function amazingNumbers(number) {
    number = String(number);
    let sum = 0;
    let contains = false;

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    sum = String(sum);

    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === "9") {
            contains = true;
            break;
        }
    }

    let result = contains === false? "False": "True";

    console.log(`${number} Amazing? ${result}`);

}

amazingNumbers(999)

function demo(number) {
    let strNum = number.toString();
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }

    let result = sum.toString().includes("9");

    console.log(result ?
        `${number} Amazing? True`:
        `${number} Amazing? False`);

}