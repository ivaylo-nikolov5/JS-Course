let paymentOption;

document.getElementById("submitBtn").onclick = function() {
    let subscribed = document.getElementById("subscribeCheckbox");
    let cardBtn = document.getElementById("card");
    let paypalBtn = document.getElementById("paypal")

    if (cardBtn.checked) {
        paymentOption = "a card";
    } else if (paypalBtn.checked) {
        paymentOption = "PayPal";
    } else {
        paymentOption = "crypto";
    }

    if (subscribed.checked) {
        subscribed = "Subscribed";
    } else {
        subscribed = "not Subscribed";
    }

    let result = `You successfully payed with ${paymentOption}.</br> Subscription status: ${subscribed}`;

    document.getElementById("resultLabel").innerHTML = result;
}