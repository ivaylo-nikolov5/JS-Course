function areaOfFigures(input) {
    let type = input[0];
    let area = 0;

    if (type === "square") {
        let side = Number(input[1]);
        area = side * side;

    } else if (type === "rectangle") {
        let length = Number(input[1]);
        let width = Number(input[2]);

        area = length * width
    } else if (type === "triangle") {
        let length = Number(input[1]);
        let height = Number(input[2]);

        area = (length * height) / 2
    } else if (type === "circle") {
        let radius = Number(input[1]);

        area = (radius * radius) * Math.PI
    }

    console.log(area.toFixed(3))
}

areaOfFigures(["triangle",
    "4.5",
    "20"
])