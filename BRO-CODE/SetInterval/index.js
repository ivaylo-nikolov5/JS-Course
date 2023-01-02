let count = 0;
let max = window.prompt("Count up to? : ");
max = Number(max);

const timer = setInterval(countUp, 1000);

function countUp() {
    count++;
    console.log(count);
    if (count >= max) {
        clearInterval(timer);
    }
}