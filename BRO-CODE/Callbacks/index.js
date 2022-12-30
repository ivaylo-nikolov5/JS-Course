sum(3, 5, displayDOM)

function sum(a, b, callback) {
    let result = a * b;
    callback(result);
}


function displayConsole(info) {
    console.log(info);
}

function displayDOM(info) {
    document.getElementById("testLabel").innerHTML = info;
}