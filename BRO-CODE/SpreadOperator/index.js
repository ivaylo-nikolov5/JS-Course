// spread operator = ...

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//without ... = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(numbers);

// with ... = 1 2 3 4 5 6 7 8 9
console.log(...numbers);

// ------------------------------------------------------

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

// without ... = [ "Spongebob", "Patrick", "Sandy", (3) […] ]
//class1.push(class2);
//console.log(class1);

// with ... = [ "Spongebob", "Patrick", "Sandy", "Squidward", "Mr.Krabs", "Plankton" ]
class1.push(...class2);
console.log(class1);