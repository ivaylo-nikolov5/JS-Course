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

demo(1233)