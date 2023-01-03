//let element = document.getElementById("myTitle");
//element.style.backgroundColor = "lightgreen"

// let fruits = document.getElementsByName("fruits");

// getChecked(fruits);


// function getChecked(radioButtons) {
//     radioButtons.forEach(element => {
//         if (element.checked) {
//             console.log(element.value);
//             return;
//         }
//     });
// }


//let vegetables = document.getElementsByTagName("li");
//vegetables[0].style.backgroundColor = "lightgreen";

//let desserts = document.getElementsByClassName("desserts");
//desserts[1].style.backgroundColor = "cyan";

// let element = document.querySelector(".desserts");
// element.style.backgroundColor = "lightgreen";

let elements = document.querySelectorAll("li");

elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
});