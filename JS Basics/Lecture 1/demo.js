function concatenateData(input) {
    let fName = input[0]
    let lName = input[1]
    let age = Number(input[2])
    let town = input[3]
    let result = `You are ${f_name} ${l_name}, a ${age}-years old person from ${town}.`
    console.log(result)
}

concatenateData(["Ivailo", "Nikolov", 16, "Gabarevo"])