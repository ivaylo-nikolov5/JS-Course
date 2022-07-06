function yardGreening(input) {
    let areaPrice = Number(input[0]) * 7.61
    let discount = Number(areaPrice * 0.18)
    let total = Number(areaPrice - discount)

    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}

yardGreening(["150"])