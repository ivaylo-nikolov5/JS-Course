function simpleCalculator(num1, num2, action) {
    let actions = {
        "add": num1 + num2,
        "subtract": num1 - num2,
        "multiply": num1 * num2,
        "divide": num1 / num2
    }

    console.log(actions[action]);
}

simpleCalculator(5,
    5,
    'multiply'
)