"use strict"
console.log ("app.js is good to go!");

let playerOne = "";
let playerTwo= "";


// JQUERY event listeners for interacting with the DOM:

// User 1 Text Entry/Submit Button (new version): works!
$(document).on("click", "#mecha1_SubmitButton", function(){
playerOne= $("#player1_TextInput").val();
console.log("player-name", playerOne);
console.log(event);
});

// User 1 Text Entry/Submit Button (new version): works!
$(document).on("click", "#mecha2_SubmitButton", function(){
playerTwo= $("#player2_TextInput").val();
console.log("player-name", playerTwo);
console.log(event);
});










