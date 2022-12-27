let grade = "2";
let result = "You grade is: ";

switch (grade) {
    case "6":
        result += "Excellent";
        break;
    case "5":
        result += "Very good";
        break;
    case "4":
        result += "Good";
        break;
    case "3":
        result += "Not bad";
        break;
    case "2":
        result += "Bad! You have failed the exam!";
        break;
    default:
        result = "Invalid input grade! Try again!";
        break;
}

console.log(result);