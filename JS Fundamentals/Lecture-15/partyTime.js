function partyTime(array) {
    let expectedGuests = [];
    let vipGuests = []

    let currentGuest = array.shift();

    while (currentGuest !== "PARTY") {
        if (isNaN(Number(currentGuest[0]))) {
            expectedGuests.push(currentGuest);
        } else {
            vipGuests.push(currentGuest);
        }

        currentGuest = array.shift();
    }

    while (array.length > 0) {
        currentGuest = array.shift();
        if (expectedGuests.includes(currentGuest)) {
            let currentGuestIdx = expectedGuests.indexOf(currentGuest);
            expectedGuests = expectedGuests.slice(0, currentGuestIdx).concat(expectedGuests.slice(currentGuestIdx + 1));
        } else {
            let currentGuestIdx = vipGuests.indexOf(currentGuest);
            vipGuests = vipGuests.slice(0, currentGuestIdx).concat(vipGuests.slice(currentGuestIdx + 1));
        }
    }

    console.log(expectedGuests.length + vipGuests.length);


    for (let vipGuest of vipGuests) {
        console.log(vipGuest)
    }

    for (let guest of expectedGuests) {
        console.log(guest);
    }
}

partyTime(['7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)