const toggleBtn = document.querySelector("#toggleBtn");
const image = document.querySelector("#image");

toggleBtn.addEventListener("click", () => {
    if (image.style.visibility = "hidden") {
        image.style.visibility = "visible";
    } else {
        image.style.visibility = "hidden";
    }
})