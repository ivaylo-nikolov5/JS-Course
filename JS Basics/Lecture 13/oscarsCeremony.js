function oscarsCeremony(input) {
    let roomRent = Number(input[0]);
    let statuesPrice = roomRent - (roomRent * 0.3);
    let ketteringPrice = statuesPrice - (statuesPrice * 0.15);
    let musicPrice = ketteringPrice / 2;
    let total = roomRent + statuesPrice + ketteringPrice + musicPrice

    console.log(total.toFixed(2));
};

oscarsCeremony(["3500"])