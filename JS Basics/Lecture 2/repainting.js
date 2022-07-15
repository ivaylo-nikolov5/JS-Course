function repainting(input) {
    let nylonAmount = Number(input[0])
    let paintAmount = Number(input[1])
    let thinnerAmount = Number(input[2])
    let neededHours = Number(input[3])

    let nylonPrice = (nylonAmount + 2) * 1.5
    let paintPrice = (paintAmount + (paintAmount * 0.1)) * 14.5
    let thinnerPrice = thinnerAmount * 5

    let total = nylonPrice + paintPrice + thinnerPrice + 0.4
    let workersCost = neededHours * (total * 0.3)

    total += workersCost

    console.log(total)

}

repainting(["5 ",
    "10 ",
    "10 ",
    "1 "
])