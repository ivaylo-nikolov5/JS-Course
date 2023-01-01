const car1 = {
    brand: "Lamborghini",
    color: "blue",
    year: 2021,

    drive: function() {
        console.log(`You are driving the ${this.brand}...`);
    },

    brake: function() {
        console.log("You step on the brake...");
    }

}

const car2 = {
    brand: "Chevrolet",
    color: "red",
    year: 2023,

    drive: function() {
        console.log(`You are driving the ${this.brand}...`);
    },

    brake: function() {
        console.log("You step on the brake...");
    }

}

car1.drive();
car2.drive();