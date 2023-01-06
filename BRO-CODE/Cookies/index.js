const firstText = document.getElementById("firstText");
const secondText = document.getElementById("secondText");
const submitBtn = document.getElementById("submitBtn");
const getCookiesBtn = document.getElementById("getCookies");
const resultLabel = document.getElementById("result");


submitBtn.addEventListener("click", submit);
getCookiesBtn.addEventListener("click", getCookies);

function submit() {
    let firstName = firstText.value;
    let lastName = secondText.value;

    setCookie("firstName", firstName, 365);
    setCookie("lastName", lastName, 365);
    resultLabel.textContent = "The information was successfully saved!";
}

function getCookies() {
    firstText.value = getCookie("firstName");
    secondText.value = getCookie("lastName");
}


function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ")
    let result;
    cArray.forEach(element => {
        if (element.indexOf(name) === 0) {
            result = element.substring(name.length + 1);
        }
    })
    return result;
}


// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2024 12:00:00 UTC; path=/";
// console.log(document.cookie);

// setCookie("email", "sponge@gmail.com", 365);
// deleteCookie("lastName");
// deleteCookie("firstName");
// console.log(getCookie("email"));