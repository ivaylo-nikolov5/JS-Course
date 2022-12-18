function makeADictionary(array) {
    let dictionary = [];

    while (array.length > 0) {
        let pair = array.shift();
        let result = JSON.parse(pair);
        let parsedPair = Object.entries(result);
        let replaced = false;

        for (let i = 0; i < dictionary.length; i++) {
            if (dictionary[i][0][0] === parsedPair[0][0]) {
                dictionary[i][0][1] = parsedPair[0][1];
                replaced = true;
                break
            }
        }

        if (!replaced) {
            dictionary.push(parsedPair);
        }

    }

    dictionary = dictionary.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        }
    })

    for (let i = 0; i < dictionary.length; i++) {
        let pair = dictionary[i];
        let key = pair[0][0];
        let value = pair[0][1];
        console.log(`Term: ${key} => Definition: ${value}`);
    }

}

makeADictionary([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
        '{"Boiler":"ali"}',
    ]
)