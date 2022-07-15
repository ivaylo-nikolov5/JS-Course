function VacationBooksList(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let estematedDays = Number(input[2]);

    let estematedHours = Number(numberOfPages / pagesPerHour);
    let hoursPerDay = Number(estematedHours / estematedDays);

    console.log(hoursPerDay)
}

VacationBooksList(["432 ", "15 ", "4 "])