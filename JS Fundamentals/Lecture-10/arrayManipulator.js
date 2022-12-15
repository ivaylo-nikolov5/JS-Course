function arrayManipulator(array, manipulations) {
    let manipulatedArray = array;
    while (true) {
        let manipulation = manipulations.shift().split(" ");
        if (manipulation[0] === "print") {
            break;
        } else if (manipulation[0] === "sumPairs") {
            manipulatedArray = sumPairs(manipulatedArray)
            continue;
        }

        let command = manipulation[0];
        let number = Number(manipulation[1]);

        if (command === "add") {
            let element = manipulation[2];
            manipulatedArray = add(manipulatedArray, number, element);
        } else if (command === "addMany") {
            let elements = manipulation.slice(2);

            manipulatedArray = addMany(manipulatedArray, number, elements)
        } else if (command === "contains") {
            contains(manipulatedArray, number);
        } else if (command === "remove") {
            manipulatedArray = remove(manipulatedArray, number);
        } else if (command === "shift") {
            manipulatedArray = shift(manipulatedArray, number)
        }
    }

    console.log(`[ ${manipulatedArray.join(", ")} ]`)

    function add(array, idx, element) {
        let tempArray = array;
        tempArray = tempArray.slice(0, idx);
        tempArray.push(Number(element));
        tempArray = tempArray.concat(array.slice(idx));
        return tempArray;
    }

    function addMany(array, idx, elements) {
        let tempArray = array.slice(0, idx);
        for (let i = 0; i < elements.length; i++) {
            tempArray.push(Number(elements[i]));
        }
        tempArray = tempArray.concat(array.slice(idx));
        return tempArray;
    }

    function contains(array, element) {
        let occurrence = array.includes(element)? array.indexOf(element): -1;
        console.log(occurrence);
    }

    function remove(array, idx) {
        array = array.slice(0, idx).concat(array.slice(idx + 1));
        return array;
    }

    function shift(array, positions) {
        for (let i = 0; i < positions; i++) {
            array.push(array.shift());
        }

        return array;
    }

    function sumPairs(array) {
        let summedArray = [];

        for (let i = 0; i < array.length; i += 2) {
            let firstNum = Number(array[i]);
            let secondNum = Number(array[i + 1]);

            if (isNaN(firstNum) || isNaN(secondNum)) {
                summedArray.push(firstNum);
                return summedArray;
            }

            summedArray.push(firstNum + secondNum);
        }

        return summedArray;
    }
}

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])