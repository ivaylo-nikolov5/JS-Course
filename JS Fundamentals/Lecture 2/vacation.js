function vacation(people, groupType, day) {
    let totalPrice = 0;

    if (groupType === "Business" && people >= 100) {
        totalPrice = people -= 10
    }

    if (day === "Friday") {
        if (groupType === "Students") {
            totalPrice = people * 8.45;
        } else if (groupType === "Business") {
            totalPrice = people * 10.9;
        } else {
            totalPrice = people * 15;
        }
    } else if (day === "Saturday") {
        if (groupType === "Students") {
            totalPrice = people * 9.8;
        } else if (groupType === "Business") {
            totalPrice = people * 15.6;
        } else {
            totalPrice = people * 20;
        }
    } else {
        if (groupType === "Students") {
            totalPrice = people * 10.46;
        } else if (groupType === "Business") {
            totalPrice = people * 16;
        } else {
            totalPrice = people * 22.50;
        }
    }

    if (groupType === "Students" && people >= 30) {
        totalPrice -= totalPrice * 0.15;
    } else if (groupType === "Regular" && people >= 10 && people <= 20) {
        totalPrice -= totalPrice * 0.05;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(40, "Regular", "Saturday");