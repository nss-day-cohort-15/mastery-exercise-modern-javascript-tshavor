"use strict"
console.log ("app.js is good to go!");

let playerOneName = "";
let playerTwoName= "";
let playerOne= "";
let playerTwo= "";
// let makeMechaOne = "";
// let makeMechaTwo = "";


//////example for drop down event listeners from web///////////
$(".menuOne li a").click(function(){
   $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));


  // this.text correctly indicates the robot selected!
  console.log("Fighter 1 Selected", this.text);
  console.dir(this);
  // should I fire this function here?
  var a= this.text;
  makeMechaOne(a)
});

$(".menuTwo li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  // this.text correctly indicates the robot selected!
  console.log("Fighter 2 Selected", this.text);
  var b= this.text;
  makeMechaTwo(b)
});

// click event for FIGHT Button
$(document).on("click", "#fightButton", function(){
console.log("You clicked FIGHT!");
});

// Click events to fire functions to create mechas:
// $(".menuOne").click(makeMechaOne);
// $('.menuTwo').click(makeMechaTwo);


// WHAT DO I NEED TO PASSS INTO THIS FUNCTION TO GET IT TO WORK???
function makeMechaOne (x) {
console.log("makeMechaOne FIRED!");

        if ($("#player1_TextInput").val() !== ''){

        let playerOneName = $("#player1_TextInput").val();
        console.log(playerOneName);
        playerOne = new Battledome.Combatants[x](playerOneName);
        console.log("playerOne", playerOne);
        // // printMechaOneStats(fighter1);
        // playerOne = true;
    }

//Requirement to ensure input text is completed:

    // else {
    //     $('#fighter1stats').html("Enter a name for your fighter and then select its type");
    // }
    };

      function makeMechaTwo (y) {
          console.log("makeMechaTwo FIRED!");

          if ($("#player2_TextInput").val() !== '' && $(this).text() !== "Pick something!!!"){
          let text = $(this).text();
          let playerTwo = new Battledome.Combatants[y](playerTwoName);
          console.log("playerTwo", playerTwo);
          // mechaTwo = new Battledome.Combatants[text](userName1);
          // // printMechaTwoStats(fighter1);
          // playerTwo = true;
      }
      };













// need to add assignment of mecha classes here as well

// $("#Gunen_Lagann").click(function(){
//   console.log("You clicked Gunen_Lagann");
//   // battledome.Combatants.Bipedal
//   playerOne = new Battledome.Combatants.Gunen_Lagann(playerOneName)
//   // playerTwo = new Battledome.Combatants.Gunen_Lagann(playerTwoName)
//   console.log(playerOne, playerTwo);
// });

// $("#Gundam_Unicorn").click(function(){
//   playerOne = new Battledome.Combatants.Gundam_Unicorn(playerOneName)
//   console.log(playerOne);
// });

// $("#Scout").click(function(){
//   playerOne = new Battledome.Combatants.Scout(playerOneName)
//   console.log(playerOne);
// });

// $("#Vulture").click(function(){
//   playerOne = new Battledome.Combatants.Vulture(playerOneName)
//   console.log(playerOne);
// });

// $("#Brawler").click(function(){
//   playerOne = new Battledome.Combatants.Brawler(playerOneName)
//   console.log(playerOne);
// });

// $("#Rocketeer").click(function(){
//   playerOne = new Battledome.Combatants.Rocketeer(playerOneName)
//   console.log(playerOne);
// });


// }



// $("#Gunen_Lagann").click(function(){
//   console.log("You clicked Gunen_Lagann");
//   // battledome.Combatants.Bipedal
//   playerOne = new Battledome.Combatants.Gunen_Lagann(playerOneName)
//   // playerTwo = new Battledome.Combatants.Gunen_Lagann(playerTwoName)
//   console.log(playerOne, playerTwo);
// });

// $("#Gundam_Unicorn").click(function(){
//   playerOne = new Battledome.Combatants.Gundam_Unicorn(playerOneName)
//   console.log(playerOne);
// });

// $("#Scout").click(function(){
//   playerOne = new Battledome.Combatants.Scout(playerOneName)
//   console.log(playerOne);
// });

// $("#Vulture").click(function(){
//   playerOne = new Battledome.Combatants.Vulture(playerOneName)
//   console.log(playerOne);
// });

// $("#Brawler").click(function(){
//   playerOne = new Battledome.Combatants.Brawler(playerOneName)
//   console.log(playerOne);
// });

// $("#Rocketeer").click(function(){
//   playerOne = new Battledome.Combatants.Rocketeer(playerOneName)
//   console.log(playerOne);
// });


// }





















