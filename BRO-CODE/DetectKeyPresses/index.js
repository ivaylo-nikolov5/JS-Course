const boxDiv = document.querySelector("#boxDiv");
window.addEventListener("keydown", move);

let x = 0;
let y = 0;

function move(event) {
    if (x > 0) {
        x = 0;
        return;
    } else if (y < 0) {
        y = 0;
        return;
    }

    switch (event.key) {
        case "ArrowDown":
            y += 5;
            boxDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5;
            boxDiv.style.top = y + "px";
            break;
        case "ArrowLeft":
            x += 5;
            boxDiv.style.right = x + "px";
            break;
        case "ArrowRight":
            x -= 5;
            boxDiv.style.right = x + "px";
            break;
    }   
}