function lunchBreak(input) {
    let serialName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let breakForLunch = breakLength / 8;
    let recreationBreak = breakLength / 4;
    let leftTime = breakLength - breakForLunch - recreationBreak;

    if (leftTime >= episodeLength) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(leftTime - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeLength - leftTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones",
    "60",
    "96"
])