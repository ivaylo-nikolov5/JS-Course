function convertToJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }

    let jsonPerson = JSON.stringify(person);
    console.log(jsonPerson);
}

convertToJSON('George', 'Jones', 'Brown');