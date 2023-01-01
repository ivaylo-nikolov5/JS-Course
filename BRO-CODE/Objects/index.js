const car1 = {
    brand: "Lamborghini",
    model: "Aventador",
    color: "blue",
    year: 2021,

    drive: function() {
        console.log("You are driving the car...");
    },

    brake: function() {
        console.log("You step on the brake...");
    }

}

const car2 = {
    brand: "Chevrolet",
    model: "Corvette",
    color: "red",
    year: 2023,

    drive: function() {
        console.log("You are driving the car...");
    },

    brake: function() {
        console.log("You step on the brake...");
    }

}

console.log(car2.brand);
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();