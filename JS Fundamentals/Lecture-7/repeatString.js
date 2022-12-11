function repeatString(string, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += string;
    }

    console.log(result);
}

repeatString("abc", 3);

