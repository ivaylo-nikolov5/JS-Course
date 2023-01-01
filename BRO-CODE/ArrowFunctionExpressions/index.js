const greeting = (name) => console.log(`Hello ${name}!`);
const calcRectangleArea = (a, b) => a * b;
const descendingSortGrades = (grades) => grades.sort((a, b) => { return b - a });
const print = (element) => console.log(element);

let grades = [5, 2, 1, 6, 4, 3];
descendingSortGrades(grades);
grades.forEach(print);