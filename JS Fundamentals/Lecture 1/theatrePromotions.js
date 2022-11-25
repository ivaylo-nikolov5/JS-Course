function theatrePromotions(typeOfDay, age) {
    price = 0
    if (age < 0 || age > 122) {
        price = "Error!"
    } else if (typeOfDay === "Weekday") {
        if (age <= 18) {
            price = 12;
        } else if (age <= 64) {
            price = 18;
        } else {
            price = 12;
        }
    } else if (typeOfDay === "Weekend") {
        if (age <= 18) {
            price = 15;
        } else if (age <= 64) {
            price = 20;
        } else {
            price = 15;
        }
    } else if (typeOfDay === "Holiday") {
        if (age <= 18) {
            price = 5;
        } else if (age <= 64) {
            price = 12;
        } else {
            price = 10;
        }
    } else {
        price = "Error!";
    };

    if (price === "Error!") {
        console.log(price);
    } else {
        console.log(`${price}$`);
    }


}

theatrePromotions("Holiday",
    50);