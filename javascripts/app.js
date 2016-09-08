"use strict"
console.log ("app.js is good to go!");

let playerOneName = "";
let playerTwoName= "";
let playerOne= "";
let playerTwo= "";


//////example for drop down event listeners from web///////////
$(".menuOne li a").click(function(){
   $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  // this.text correctly indicates the robot selected!
  var a= this.text;
  makeMechaOne(a)
});

$(".menuTwo li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  var b= this.text;
  makeMechaTwo(b)
});

// click event for FIGHT Button
$(document).on("click", "#fightButton", function(){
// console.log("You clicked FIGHT!");
});

///////////functions to create robots (mecha)/////////////
    function makeMechaOne (x) {
      if ($("#player1_TextInput").val() !== '') {
    let playerOneName = $("#player1_TextInput").val();
    playerOne = new Battledome.Combatants[x](playerOneName);
    playerOne.setModel(x);
    // debugger;
    // console.log("playerOne", playerOne);
    printMechaOneStats();
    playerOne.setUp = true;

    }

    };

    function makeMechaTwo (y) {
        // console.log("makeMechaTwo FIRED!");
        if ($("#player2_TextInput").val() !== ''){
        let playerTwoName = $("#player2_TextInput").val();
         playerTwo = new Battledome.Combatants[y](playerTwoName);
         playerTwo.setModel(y);
        // console.log("playerTwo", playerTwo);
        printMechaTwoStats();
        playerTwo.setUp = true;
    }
    };


//Functions to print fighters 1 and 2 stats to DOM. These are both called twice: when fighters are first created and during fight itself, in order to reflect changes in fighter stats as fight function runs.

    function printMechaOneStats(x){
        // debugger;
        console.log(playerOne);
        console.log(playerOne.name);
        $("#playerOneStats").html("Player" + " " + playerOne.name + " " + "has selected a" + " " + playerOne.model + " " + "with" + " " + playerOne.health + " " + "health, that does" + " " + playerOne.damage + " " + "damage!");

    };

    function printMechaTwoStats(y){
          console.log("playerTwo", playerTwo);
          console.log(playerTwo.name);
          $("#playerTwoStats").html("Player" + " " + playerTwo.name + " " + "has selected a" + " " + playerTwo.model + " " + "with" + " " + playerTwo.health + " " + "health, that does" + " " + playerTwo.damage + " " + "damage!");
    };

/////////////////////////////FIGHT FUNCTIONS BELOW///////////////////////

      var fightTime = function () {
      console.log("function attackMode is ready!");

        if (playerOne.setUp === true && playerTwo.setUp === true ) {
        // debugger;
            playerOne.health = playerOne.health - playerTwo.damage;
            playerTwo.health = playerTwo.health - playerOne.damage;
            printMechaOneStats(playerOne);
            printMechaTwoStats(playerTwo);
                if(playerOne.health <= 0) {
                  playerOne.health = 0;
                  printMechaOneStats(playerOne);
                  $("#playerOneAttack").html("The" + " " + playerOne.model + " " + "loses!");
                }

                if(playerTwo.health <= 0){
                  playerTwo.health = 0;
                  printMechaTwoStats(playerTwo);
                  $("#playerOneAttack").html("The" + " " + playerTwo.model + " " + "loses!");
                }
            }
        else {
            alert("I can't do your work for you. Create two players.");
        }

        };

//fightTime is called on click of attack button.

$("#fightButton").click(fightTime);


























