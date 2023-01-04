let innerDiv = document.getElementById("innerDiv");
let outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue() {
    alert(`You selected ${this.id}`)
    this.style.backgroundColor = "red"
}