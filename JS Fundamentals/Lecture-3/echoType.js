function echoType(data) {
    let dataType = typeof data;
    console.log(dataType);
    if (dataType === "string" || dataType === "number") {
        console.log(data);
    } else {
        console.log("Parameter is not suitable for printing");
    };

}

echoType(null)