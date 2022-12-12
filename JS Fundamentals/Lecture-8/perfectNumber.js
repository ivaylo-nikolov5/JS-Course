function perfectNumber(number) {
    let perfect = isPerfect(number);

    if (perfect === number) {
        console.log("We have a perfect number!")
        return;
    }
    console.log("It's not so perfect.")

    function isPerfect(n) {
        let result = 0;
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                result += i;
            }
        }

        return result;
    }

}

perfectNumber(0)