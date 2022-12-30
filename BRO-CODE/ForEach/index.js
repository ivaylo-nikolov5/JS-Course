let students = ["spongebob", "patrick", "sandy", "squidward", "mr.Krabs", "plankton"];
students.forEach(capitalize);

students.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element);
}