// let promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;

//     if (fileLoaded) {
//         resolve("File loaded successfully!");
//     } else {
//         reject("File NOT loaded!");
//     }
// })

// promise.then(value => console.log(value))
//     .catch(error => console.log(error));

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));