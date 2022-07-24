function evenPowers2(input) {
    let num = Number(input[0])
    for (i = 0; i <= num; i += 2) {
        let res = Math.pow(2, i)
        console.log(res);
    }
}

evenPowers2(["7"])