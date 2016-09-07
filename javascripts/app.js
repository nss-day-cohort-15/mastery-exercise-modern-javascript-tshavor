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
  // console.log("Fighter 1 Selected", this.text);
  // console.dir(this);
  // should I fire this function here?
  var a= this.text;
  makeMechaOne(a)
});

$(".menuTwo li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  // this.text correctly indicates the robot selected!
  // console.log("Fighter 2 Selected", this.text);
  var b= this.text;
  makeMechaTwo(b)
});

// click event for FIGHT Button
$(document).on("click", "#fightButton", function(){
console.log("You clicked FIGHT!");
});

///////////functions to create robots (mecha)/////////////
    function makeMechaOne (x) {
    // console.log("makeMechaOne FIRED!");
        if ($("#player1_TextInput").val() !== ''){
        let playerOneName = $("#player1_TextInput").val();
        playerOne = new Battledome.Combatants[x](playerOneName);
        // debugger;
        console.log("playerOne", playerOne);
        printMechaOneStats();
        playerOne = true;
    }

    };

      function makeMechaTwo (y) {
          // console.log("makeMechaTwo FIRED!");
          if ($("#player2_TextInput").val() !== ''){
          let playerTwoName = $("#player2_TextInput").val();
          let playerTwo = new Battledome.Combatants[y](playerTwoName);
          console.log("playerTwo", playerTwo);
          printMechaTwoStats();
          playerTwo = true;
      }
      };


//Functions to print fighters 1 and 2 stats to DOM. These are both called twice: when fighters are first created and during fight itself, in order to reflect changes in fighter stats as fight function runs.

    function printMechaOneStats(x){
          let MechaOneStats = $(playerOneName);
          console.log(playerOne);
          console.log(playerOne.name);
          // let MechaOneStats= `${playerOne.name}`;
          // $("#playerOneStats").prepend(${x.name});

          $("#playerOneStats").html("Thom" + playerOneName);

    };

    function printMechaTwoStats(y){
        let MechaTwoStats = $(playerOneName);
          console.log(playerTwo);
          console.log(playerTwo.name);
          // let MechaTwoStats = `<div style="border: 1px dotted black; border-radius: 25px; padding: 10px; margin-top:10px; background-color: lightgrey;">${x.name} the ${x.title} weighs ${x.weight} pounds, would rather be ${x.preferences}, and obviously has a ${x.attitude} attitude. ${x.name} also commands ${x.indenturedServant}, who has kindly provided ${x.name} with <span style="color:red; font-weight: bolder">${x.hasCans}</span> cans.</div>`
          // $("#playerTwoStats").html(MechaTwoStats);
    };
/////////////////////////////FIGHT FUNCTIONS BELOW///////////////////////










