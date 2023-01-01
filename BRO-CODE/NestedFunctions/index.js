let username = "Ivaylo";
let userInbox = 0;

login()

function login() {
    displayName();
    displayInbox();

    function displayName() {
        console.log(`Hello, ${username}!`);
    }

    function displayInbox() {
        console.log(`You have ${userInbox} unread messages.`);
    }
}