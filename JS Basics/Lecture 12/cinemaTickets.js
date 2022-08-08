function cinemaTickets(input) {
    let totalTickets = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidTickets = 0;
    let isFinished = false;

    let idx = 0;
    let movieName = input[idx];
    idx++;
    let freePlaces = Number(input[idx]);
    idx++;


    while (movieName !== "Finish") {
        let fullPlaces = 0;
        let currentTicket = input[idx]
        idx++;
        while (currentTicket !== "End") {
            if (fullPlaces === freePlaces) {

                break;
            };

            if (currentTicket == "Finish") {
                isFinished = true;
                break;
            };


            if (currentTicket == "standard") {
                standartTickets++;
            } else if (currentTicket == "kid") {
                kidTickets++;
            } else {
                studentTickets++;
            };

            totalTickets++;

            fullPlaces++;
            currentTicket = input[idx];
            idx++;



        }


        let fullPlacesPercent = (fullPlaces / freePlaces * 100).toFixed(2);
        console.log(`${movieName} - ${fullPlacesPercent}% full.`);

        movieName = input[idx];
        idx++;
        freePlaces = Number(input[idx]);
        idx++;

        if (isFinished) {
            break
        };

    };

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
};

cinemaTickets(["Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"
])