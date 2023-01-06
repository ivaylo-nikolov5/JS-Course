let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
// BASIC COMMANDS
// context.beginPath();
// context.lineWidth = 10;
// context.strokeStyle = "blue";
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);

//context.stroke();
// DRAW A TRIANGLE
// context.beginPath();
// context.fillStyle = "blue";
// context.lineWidth = 10;  
// context.strokeStyle = "orange";
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.moveTo(250, 0);
// context.lineTo(500, 250);   
// context.stroke();
// context.fill();

// DRAW A RECTANGLE

// context.fillStyle = "blue";
// context.fillRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 0, 250, 250);

// context.fillStyle = "yellow";
// context.fillRect(250, 250, 250, 250);

// DRAW A CIRCLE
// context.beginPath();
// context.lineWidth = 10;
// context.fillStyle = "lightblue";
// // (x, y, r, sAngle, eAngle, counterClockwise);
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();

//DRAW TEXT

context.font = "50px MV Boli"
context.fillStyle = "green0";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);