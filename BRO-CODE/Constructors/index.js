class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is currently studying...`);
    }
}

let student1 = new Student("Spongebob", 30, 3.5);
let student2 = new Student("Patrick", 35, 1.5);
let student3 = new Student("Squidward", 45, 5.3);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();