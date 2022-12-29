document.getElementById("calculateBtn").onclick = function() {
    let temperature = Number(document.getElementById("temperatureVal").value);
    let celsiusOption = document.getElementById("celsius");
    let result;
    let format;

    if (celsiusOption.checked) {
        result = fromFahrenheitToCelsius(temperature);
        format = "&deg;C";

    } else {
        result = fromCelsiusToFahrenheit(temperature);
        format = "&deg;F";
    }

    document.getElementById("result").innerHTML = `The result is: ${Math.trunc(result)}${format}`

}


function fromCelsiusToFahrenheit(temp) {
    return (temp * 1.8 + 32);
}

function fromFahrenheitToCelsius(temp) {
    return (temp - 32) * (5 / 9);
}