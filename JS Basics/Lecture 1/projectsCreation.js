function projectsCreation(input) {
    let name = input[0]
    let projects = Number(input[1])
    let hours = projects * 3
    let result = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`

    console.log(result)
}

projectsCreation(["George ", "4 "])