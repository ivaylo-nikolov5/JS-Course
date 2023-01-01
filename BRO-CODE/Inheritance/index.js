class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating...`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping...`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";

    jump() {
        console.log(`This ${this.name} is jumping...`);
    }
}

class Fish extends Animal {
    name = "fish";

    swim() {
        console.log(`This ${this.name} is swimming...`);
    }
}

class Hawk extends Animal {
    name = "hawk";

    fly() {
        console.log(`This ${this.name} is flying...`);
    }
}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

console.log(rabbit.name);
console.log(fish.name);
console.log(hawk.name);

console.log(rabbit.alive);
console.log(fish.alive);
console.log(hawk.alive);

rabbit.eat();
fish.eat();
hawk.eat();

rabbit.sleep();
fish.sleep();
hawk.sleep();

rabbit.jump();
fish.swim();
hawk.fly();