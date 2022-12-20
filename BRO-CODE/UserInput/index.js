let username;
document.getElementById("submit").onclick = function() {

    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username + "!";

}