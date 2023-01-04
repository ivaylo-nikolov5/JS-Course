// let myButton = document.getElementById("myButton");
// myButton.onclick = doSomething;

// const body = document.body;
// body.onload = doSomething;

// const myText = document.getElementById("myText");
// myText.onchange = doSomething;

let myDiv = document.getElementById("myDiv");
// myDiv.onmouseover = doSomething;
// myDiv.onmouseleave = doSomethingElse;
myDiv.onmousedown = doSomething;
myDiv.onmouseup = doSomethingElse;

function doSomething() {
    // alert("You did something!");
    myDiv.style.backgroundColor = "red";
}

function doSomethingElse() {
    myDiv.style.backgroundColor = "lightgreen"
}

