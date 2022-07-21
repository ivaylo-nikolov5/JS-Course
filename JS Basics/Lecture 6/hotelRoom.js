function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    if (month === "May" || month === "October") {
        apartmentPrice = nights * 65
        studioPrice = nights * 50
        if (nights > 7 && nights <= 14) {
            studioPrice -= studioPrice * 0.05;
        } else if (nights > 14) {
            studioPrice -= studioPrice * 0.3
            apartmentPrice -= apartmentPrice * 0.1
        }
    } else if (month == "June" || month == "September") {
        apartmentPrice = nights * 68.7
        studioPrice = nights * 75.2
        if (nights > 14) {
            studioPrice -= studioPrice * 0.2
            apartmentPrice -= apartmentPrice * 0.1
        };


    } else if (month == "July" || month == "August") {
        apartmentPrice = nights * 77
        studioPrice = nights * 76
        if (nights > 14) {
            apartmentPrice -= apartmentPrice * 0.1
        };
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["August",
    "20"
])