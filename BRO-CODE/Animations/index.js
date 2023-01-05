const beginBtn = document.getElementById("beginBtn");
const animationObject = document.getElementById("animationObject");

beginBtn.addEventListener("click", begin);

// function begin() {
//     let timerId = null;
//     let x = 0;
//     let y = 0;
//     let borderRadius = 0;

//     timerId = setInterval(move, 5);
//     timerId = setInterval(makeCircle, 10);

//     function move() {
//         if (y >= 110) {
//             clearInterval(timerId);
//         } else {
//             x += 1;
//             y += 1;
//             animationObject.style.marginLeft = x + "px";  
//             animationObject.style.marginTop = y + "px";
//         }
//     }

//     function makeCircle() {
//         if (borderRadius >= 70) {
//             clearInterval(timerId);
//             return;
//         }

//         borderRadius++;
//         animationObject.style.borderRadius = borderRadius + "px";
//     }
// }

function begin() {
    let timerId = null;
    let degrees = 0;
    timerId = setInterval(rotate, 1);

    function rotate() {
        if (degrees >= 720) {
            clearInterval(timerId);
        } else {
            degrees += 2;
            animationObject.style.transform = "rotateZ(" + degrees + "deg)";
        }
    }

}