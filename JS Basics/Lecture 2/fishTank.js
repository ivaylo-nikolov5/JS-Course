function fishTank(input) {
    let length = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let perc = Number(input[3])

    let capacity = length * width * height
    let capacityInLiters = capacity / 1000
    let occupiedSpace = perc / 100

    let neededLiters = capacityInLiters * (1 - occupiedSpace)

    console.log(neededLiters)
}

fishTank(["105 ",
    "77 ",
    "89 ",
    "18.5 "
])