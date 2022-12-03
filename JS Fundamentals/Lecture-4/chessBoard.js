function chessBoard(number) {
    let firstColor = "black";
    let secondColor = "white";

    console.log("<div class=\"chessboard\">");

    for (let i = 0; i < number; i++) {
        console.log("  <div>");

        for (let j = 0; j < number; j++) {
            console.log(`    <span class="${firstColor}"></span>`);
            let temp = firstColor;
            firstColor = secondColor;
            secondColor = temp;
        }

        console.log("  </div>");

        if (number % 2 === 0) {
            let temp = firstColor;
            firstColor = secondColor;
            secondColor = temp;
        }


    }

    console.log("</div>");

}

chessBoard(6);