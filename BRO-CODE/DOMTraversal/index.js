let element = document.querySelector("#vegetables");
let children = Array.from(element.children);
children.forEach(child => child.style.backgroundColor = "lightgreen");


//.firstElementChild
//.lastElementChild
//.parentElement
//.nextElementSibling
//.previousElementSibling
//.children[]
//Array.from(.children)