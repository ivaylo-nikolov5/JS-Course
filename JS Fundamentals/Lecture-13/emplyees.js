function employees(array) {
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let personalNumber = name.length;

        let employee = {
            name: name,
        }

        console.log(`Name: ${employee.name} -- Personal Number: ${personalNumber}`);
    }
}

employees([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)