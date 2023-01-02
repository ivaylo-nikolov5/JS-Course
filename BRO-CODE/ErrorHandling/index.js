try {
    let x = window.prompt("Enter a number:")
    x = Number(x);

    if (isNaN(x)) throw "This is not a number!";
    if (x == "") throw "This is empty!";

    console.log(`${x} is a number!`);

} catch (error) {
    console.log(error);
} finally {
    console.log("This always executes!");
}