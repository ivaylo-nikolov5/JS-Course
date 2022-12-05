function addOrRemove(array) {
    let result = [];

    for (let i = 1; i <= array.length; i++) {
        let action = array[i - 1];

        if (action === "add") {
            result.push(i);
        } else {
            if (array !== []){
                result.pop();
            }

        }
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join(" "));
    }
}

addOrRemove(['remove', 'remove', 'remove'])