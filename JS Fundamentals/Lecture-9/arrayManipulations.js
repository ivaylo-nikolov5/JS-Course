function arrayManipulations(array) {
    let numbers = array[0].split(" ");
    let idx = 1;

    while (idx < array.length) {
        let command = array[idx].split(" ");
        let action = command[0];
        let number = Number(command[1]);

        if (action === "Add") {
            numbers = add(numbers, number);
        } else if (action === "Remove") {
            numbers = remove(numbers, number);
        } else if (action === "RemoveAt") {
            numbers = removeAt(numbers, number);
        } else if (action === "Insert") {
            let idx = Number(command[2]);
            numbers = insert(numbers, idx, number);
        }

        idx++;
    }

    console.log(numbers.join(" "))

    function add(array, number) {
        array.push(number);
        return array;
    }

    function remove(array, number) {
        let filteredArray = [];

        for (let i = 0; i < array.length; i++) {
            if (Number(array[i]) === number) {
                continue;
            }
            filteredArray.push(array[i]);
        }

        return filteredArray;
    }

    function removeAt(array, idx) {
        let left = array.slice(0, idx);
        let right = array.slice(idx+ 1);

        return left.concat(right);
    }

    function insert(array, index, element) {
        array.splice(index, 0, element);
        return array;
    }
}

arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
)