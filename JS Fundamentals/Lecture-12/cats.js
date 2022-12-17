function cats(pairs) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < pairs.length; i++) {
        let [name, age] = pairs[i].split(" ");
        let currentCat = new Cat(name, age);
        currentCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);