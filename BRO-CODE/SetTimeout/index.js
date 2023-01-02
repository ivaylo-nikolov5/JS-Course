let item = "cryptocurrency";
let price = 12700;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price) {
    alert(`Buy this ${item} for $${price}!`);
}

function secondMessage() {
    alert("This is not a scam!");
}

function thirdMessage() {
    alert("DO IT!");
}
document.getElementById("buyBtn").onclick = function() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Thanks for buying this course!");
}