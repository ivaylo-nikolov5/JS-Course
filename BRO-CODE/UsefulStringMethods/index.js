let username = " Ivaylo Nikolov ";
let phoneNumber = "+359-89-993-1234";

let result;

result = username.length;
result = username.charAt(3);
result = username.charCodeAt(3);
result = username.indexOf("y");
result = username.lastIndexOf("o");
result = username.endsWith("v");
result = username.trim();
result = username.toUpperCase();
result = username.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", ".");

console.log(phoneNumber);