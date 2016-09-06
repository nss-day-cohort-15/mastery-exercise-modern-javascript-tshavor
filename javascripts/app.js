"use strict"
console.log ("app.js is good to go!");

let playerOneName = "";
let playerTwoName= "";
let playerOne= "";
let playerTwo= "";

// JQUERY event listeners for interacting with the DOM:
// var createMechaOne= function(put click event here...){

// User 1 Text Entry/Submit Button (new version): works!
// $(document).on("click", "#mecha1_SubmitButton", function(){
// playerOneName= $("#player1_TextInput").val();
// console.log("player-name", playerOne);
// console.log(event);
// });


//////example for drop down event listeners from web///////////
$(".menuOne li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  console.log("Fighter 1 Selected", this.text);
});
////////////////////////////////////////////////////
$(".menuTwo li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  console.log("Fighter 2 Selected", this.text);
});





// need to add assignment of mecha classes here as well

$("#Gunen_Lagann").click(function(){
  console.log("You clicked Gunen_Lagann");
  // battledome.Combatants.Bipedal
  playerOne = new Battledome.Combatants.Gunen_Lagann(playerOneName)
  // playerTwo = new Battledome.Combatants.Gunen_Lagann(playerTwoName)
  console.log(playerOne, playerTwo);
});

$("#Gundam_Unicorn").click(function(){
  playerOne = new Battledome.Combatants.Gundam_Unicorn(playerOneName)
  console.log(playerOne);
});

$("#Scout").click(function(){
  playerOne = new Battledome.Combatants.Scout(playerOneName)
  console.log(playerOne);
});

$("#Vulture").click(function(){
  playerOne = new Battledome.Combatants.Vulture(playerOneName)
  console.log(playerOne);
});

$("#Brawler").click(function(){
  playerOne = new Battledome.Combatants.Brawler(playerOneName)
  console.log(playerOne);
});

$("#Rocketeer").click(function(){
  playerOne = new Battledome.Combatants.Rocketeer(playerOneName)
  console.log(playerOne);
});


// }

///////////////////////////////////////////////////
var createMechaOne = function(puclickeventhere){

// User 2 Text Entry/Submit Button (new version): works!
$(document).on("click", "#mecha2_SubmitButton", function(){
playerTwoName= $("#player2_TextInput").val();
// console.log("player-name", playerTwo);
// console.log(event);
});

/////MECHA Selection Buttons//////////
// need to add assignment of mecha classes here as well

$("#Gunen_Lagann").click(function(){
  console.log("You clicked Gunen_Lagann");
  // battledome.Combatants.Bipedal
  playerOne = new Battledome.Combatants.Gunen_Lagann(playerOneName)
  // playerTwo = new Battledome.Combatants.Gunen_Lagann(playerTwoName)
  console.log(playerOne, playerTwo);
});

$("#Gundam_Unicorn").click(function(){
  playerOne = new Battledome.Combatants.Gundam_Unicorn(playerOneName)
  console.log(playerOne);
});

$("#Scout").click(function(){
  playerOne = new Battledome.Combatants.Scout(playerOneName)
  console.log(playerOne);
});

$("#Vulture").click(function(){
  playerOne = new Battledome.Combatants.Vulture(playerOneName)
  console.log(playerOne);
});

$("#Brawler").click(function(){
  playerOne = new Battledome.Combatants.Brawler(playerOneName)
  console.log(playerOne);
});

$("#Rocketeer").click(function(){
  playerOne = new Battledome.Combatants.Rocketeer(playerOneName)
  console.log(playerOne);
});


}





















