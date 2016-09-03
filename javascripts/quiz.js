"use strict";
console.log ("quiz.js is ready to rock!!!");

//SET GLOBAL VAR TO CREATE PROTOTYPE CHAIN

var battledome = (function (battledome) {

//declare empty object to hold Mecha ("robots")
battledome.Combatants = {};

battledome.Combatants.Mecha = function() {

//set top of prototype chain (Mecha constructor)

    this.health = 0;
    this.damageBonus = 0;
    this.allowedModels = ["Gunen_Lagann", "Gundam_Unicorn", "Scout", "Vulture", "Rocketeer", "Brawler"];
    this.weapon = null;
};
});

//next level down on chain: types (Bipedal/Drone/Combat Constructors)
battledome.Combatants.Bipedal = function() {
  this.health = 20;
  this.damageBonus= 10
};
battledome.Combatants.Bipedal.prototype = new Battledome.Combatants.Mecha();

battledome.Combatants.Drone = function() {
  this.name = "Drone";
  this.health = this.healthBonus +5;
  this.damageBonus = this.damageBonus +5;
};
battledome.Combatants.Drone.prototype = new Battledome.Combatants.Mecha();

battledome.Combatants.Combat = function() {
  this.name = "Combat";
  this.health = this.healthBonus + 10;
  this.damageBonus = this.damageBonus +20;
};
battledome.Combatants.Combat.prototype = new Battledome.Combatants.Mecha();

//Designate last levels of prototype chain (2 "models" for each class of Mecha)
//Bipedal:
battledome.Combatants.Gunen_Lagann = function() {
  this.name = userName;
  this.healthBonus = this.healthBonus + Math.floor(Math.random() * 6 + 1);
  this.damageBonusBonus = this.damageBonusBonus + Math.floor(Math.random() * 8 + 1);
};
battledome.Combatants.Gunen_Lagann.prototype = new battledome.Combatants.Bipedal();

battledome.Combatants.Gundam_Unicorn = function() {
  this.name = userName;
  this.healthBonus = this.healthBonus + Math.floor(Math.random() * 3 + 1);
  this.damageBonusBonus = this.damageBonusBonus + Math.floor(Math.random() * 4 + 7);
};
battledome.Combatants.Gundam_Unicorn.prototype = new battledome.Combatants.Bipedal();
////////////////////////////////////////////////////////////////////////////////////
// Drone:
Battledome.Combatants.Scout = function() {
  this.name = "Scout";
  this.healthBonus = this.healthBonus + Math.floor(Math.random() * 3 + 1);
  this.damageBonusBonus = this.damageBonusBonus +Math.floor(Math.random() * 3 + 1);
};
Battledome.Combatants.Scout.prototype = new Battledome.Combatants.Drone();

Battledome.Combatants.Vulture = function() {
  this.name = "Vulture";
  this.healthBonus = this.healthBonus + Math.floor(Math.random() * 3 + 1);
  this.damageBonus = this.damageBonus + Math.floor(Math.random() * 3 + 1);
};
Battledome.Combatants.Vulture.prototype = new Battledome.Combatants.Drone();
///////////////////////////////////////////////////////////////////////////
// Combat:
Battledome.Combatants.Rocketeer = function() {
  this.name = "Rocketeer";
  this.healthBonus = this.healthBonus + Math.floor(Math.random() * 3 + 1);
  this.damageBonus = this.damageBonus + Math.floor(Math.random() * 3 + 1);
};
Battledome.Combatants.Rocketeer.prototype = new Battledome.Combatants.Combat();

Battledome.Combatants.Brawler = function() {
  this.name = "Brawler";
  this.healthBonus = this.healthBonus + Math.floor(Math.random() * 3 + 1);
  this.damageBonus = this.damageBonus + Math.floor(Math.random() * 3 + 1);
};
Battledome.Combatants.Brawler.prototype = new Battledome.Combatants.Combat();






var playerOne = "";
// var playerOne = new Battledome.Combatants.Mecha();
// var playerTwo = new Battledome.Combatants.Mecha();

// add event listener to input field and store the value in the variable playerName

// $("#name_button" ).click(function() {
// playerOne.playerName= $("#player-name1").val();
//  console.log( playerOne.playerName);
//  console.dir(playerOne);
// });

$(document).on("click", "#mecha1_SubmitButton", function(){
playerOne.playerName= $("#player-name1").val();
 console.log( playerOne.playerName);
 console.dir(playerOne);
});

// $("#name_button" ).click(function() {
// playerOne.playerName= $("#player-name2").val();
//  console.log( playerOne.playerName);
//  console.dir(playerOne);
// });
// // console.log(playerOne.playerName);

// ////event handlers for classes///////
// $("#Gunen_Lagann").click(function(){
//   console.log("you picked the Gunen_Lagann");
//   playerOne.class = new Batledrone.Combatants.Gunen_Lagann();
//   console.log(playerOne);
// })

// $("#Gundam_Unicorn").click(function(){
//   console.log("you picked the Gundam_Unicorn");
//   playerOne.class = new Batledrone.Combatants.Gundam_Unicorn;
//   console.log(playerOne);
// })

// $("#Scout").click(function(){
//   console.log("you picked the Scout");
//   playerOne.class = new Batledrone.Combatants.Scout;
//   console.log(playerOne);
// })

// $("#Vulture").click(function(){
//   console.log("you picked the Vulture");
//   playerOne.class = new Batledrone.Combatants.Vulture;
//   console.log(playerOne);
// })

// $("#Rocketeer").click(function(){
//   console.log("you picked the Rocketeer");
//   playerOne.class = new Batledrone.Combatants.Rocketeer;
//   console.log(playerOne);
// })

// $("#Brawler").click(function(){
//   console.log("you picked the Brawler");
//   playerOne.class = new Batledrone.Combatants.Brawler;
//   console.log(playerOne);
// })



// $(document).ready(function() {
//   var orc;
//   // console.log("orc ready!")
//   /*
//     Show the initial view that accepts player name
//    */
//   $("#player-setup").show();

//   /*
//     When any button with card__link class is clicked,
//     move on to the next view.
//    */
//   $(".card__link").click(function(e) {
//     var nextCard = $(this).attr("next");
//     var moveAlong = false;

//     switch (nextCard) {
//       case "card--class":
//         moveAlong = ($("#player-name").val() !== "");
//         break;
//       case "card--weapon":
//         moveAlong = ($("#player-name").val() !== "");
//         break;
//       case "card--battleground":
//         moveAlong = ($("#player-name").val() !== "");

//         function beginCombat(playerOne) {
//           orc = new Batledrone.Combatants.Orc();
//           orc.generateClass();
//           console.log(orc.health);
//           orcHealth = orc.health;
//           console.log("orc's health: ", orcHealth);
//           playerHealth = playerOne.health;
//           console.log("human health: ", playerHealth);
//           orc.setWeapon(new BroadSword());
//           console.log(orc.toString());
//           console.log(orc)
//           $("#inputEnemyStats").text(orc.toString());
//           $("#inputPlayerStats").append(playerOne.toString());
//         }
//         beginCombat(playerOne)
//       }

//     if (moveAlong) {
//       $(".card").hide();
//       $("." + nextCard).show();
//     }
//   });

//   /*
//     When the back button clicked, move back a view
//    */
//   $(".card__back").click(function(e) {
//     var previousCard = $(this).attr("previous");
//     $(".card").hide();
//     $("." + previousCard).show();
//   });
// /*new code: when attack button is pressed event listener*/
//   $(".attack__button").click(function(e) {
//     console.log("you pressed the attack button");
//     // var foe = new Batledrone.Combatants.Monster();
//     // console.log("spell: ", spell.toString());
//     // console.log("player one health at start: ", playerHealth);
//     var player1damageBonus = playerOne.weapon.attackdamageBonus();
//     console.log("player one inflicts this damageBonus: ", player1damageBonus);
//     var orcdamageBonus = orc.weapon.attackdamageBonus();
//     console.log("orc inflicts this damageBonus: ", orcdamageBonus);
//     console.log("orc health: ", orc.health);
//     console.log("human health: ",playerOne.health);
//     orc.health = orc.health - player1damageBonus;
//     playerOne.health = playerOne.health - orcdamageBonus;
//     console.log("The orc's health is now: ", orc.health);
//     console.log(playerOne.playerName, "'s health is now: ", playerOne.health);
//     $("#inputPlayerAttack").text(playerOne.playerName + playerOne.weapon.toString(player1damageBonus));
//     $("#inputPlayerAttack").append("<p>" + playerOne.playerName + "'s hitpoints are now " + playerOne.health + "." + "</p>");

//     // $("#inputEnemyAttack").text(orc.weapon.toString(orcdamageBonus));
//     $("#inputEnemyAttack").text("Badguy Bill" + " hits with " + orc.weapon.name + " for " + orcdamageBonus + "!")
//     $("#inputEnemyAttack").append("<p>" + "Badguy Bill" + " hitpoints are now " + orc.health + "." + "</p>")
//     finalCountdown(orc);
//   });
// });

// function finalCountdown(orc){
//   if (playerOne.health <= 0){
//     $("#hideAttack").hide()
//     // $("#hideAttack").prop('disabled', true)
//     console.log ("YOU LOSE!");
//     $("#finalCountdown").text("YOU LOSE!")
//   }
//   else
//     if (orc.health<=0){
//     $("#hideAttack").hide()
//       $("#finalCountdown").prop('disabled', true)
//       console.log ("YOU WIN!");
//       $("#finalCountdown").text("YOU WIN!")
//     }
//   }
















