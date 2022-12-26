let paymentOption;

document.getElementById("submitBtn").onclick = function() {
    let subscribed = document.getElementById("subscribeCheckbox").checked;

    if (document.getElementById("card").checked) {
        paymentOption = "a card";
    } else if (document.getElementById("paypal").checked) {
        paymentOption = "PayPal";
    } else {
        paymentOption = "crypto";
    }

    if (subscribed) {
        subscribed = "Subscribed";
    } else {
        subscribed = "not Subscribed";
    }

    let result = `You successfully payed with ${paymentOption}.</br> Subscription status: ${subscribed}`;

    document.getElementById("resultLabel").innerHTML = result;
}