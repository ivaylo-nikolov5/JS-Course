function ladybugs(array) {
    let size = array[0];
    let ladybugsIndexes = array[1].split(" ");
    let field = [];

    for (let i = 0; i < size; i++) {
        for (let idx = 0; idx < ladybugsIndexes.length; idx++) {
            let ladybug = Number(ladybugsIndexes[idx]);
            if (ladybug === i) {
                field.push(1);
                break;
            }
        }

        if (field.length - 1 < i) {
            field.push(0);
        }
    }

    for (let i = 2; i < array.length; i++) {

        let command = array[i].split(" ");
        let ladybugIdx = Number(command[0]);
        let ladybug = field[ladybugIdx];
        let direction = command[1];
        let steps = Number(command[2]);

        if (ladybug === 0 || ladybug === undefined) {
            continue;
        }

        field[ladybugIdx] = 0;
        let nextLadybugIdx = ladybugIdx;

        if (direction === "right") {
            nextLadybugIdx += steps;
        } else {
            nextLadybugIdx -= steps;
        }

        while (true) {
            if (field[nextLadybugIdx] === undefined) {
                break;
            } else if (field[nextLadybugIdx] === 0) {
                field[nextLadybugIdx] = 1;
                break;
            } else {
                if (direction === "right") {
                    nextLadybugIdx += steps;
                } else {
                    nextLadybugIdx -= steps;
                }
            }
        }

    }

    console.log(field.join(" "))
}

ladybugs([ 5, '3',
    '3 left 2',
    '1 left -2']



)