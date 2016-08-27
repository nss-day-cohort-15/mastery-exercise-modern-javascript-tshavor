 /*
  Test code to generate a human player and an orc player
 */
// var Scout = new Battledome.Combatants.Mecha();
// Scout.setWeapon(new WarAxe());
// Scout.generateClass();  // This will be used for "Surprise me" option
// console.log(Scout.toString());
// var Battledome = Battledome || {};
// Battledome.Arena = {};
// THOM- Creating a new player object for Combatants//////////////////
// set race to human by default
var playerOne = new Battledome.Combatants.Mecha();
var playerTwo = new Battledome.Combatants.Mecha();
// add event listner to input field and store the value in the variable playerName

$("#mecha1_SubmitButton").click(function() {
  console.log(event);

playerOne.playerName= $("#player-name1").val();
 console.log( playerOne.player-name1);
 console.dir(playerOne);
});

// $("#player-name2" ).click(function() {
// playerOne.playerName= $("#player-name1").val();
//  console.log( playerOne.player-name1);
//  console.dir(playerOne);
// });

////event handlers for classes///////
$("#Gunen_Lagann").click(function(){
  console.log("you picked the Gunen_Lagann");
  playerOne.class = new Battledome.Arena.Gunen_Lagann();
  console.log(playerOne);
})

$("#Gundam_Unicorn").click(function(){
  console.log("you picked the Gundam_Unicorn");
  playerOne.class = new Battledome.Arena.Gundam_Unicorn;
  console.log(playerOne);
})

$("#Gundam_Seed").click(function(){
  console.log("you picked the Gundam_Seed");
  playerOne.class = new Battledome.Arena.Gundam_Seed;
  console.log(playerOne);
})

$("#Scout").click(function(){
  console.log("you picked the Scout");
  playerOne.class = new Battledome.Arena.Scout;
  console.log(playerOne);
})

$("#Vulture").click(function(){
  console.log("you picked the Vulture");
  playerOne.class = new Battledome.Arena.Vulture;
  console.log(playerOne);
})

$("#Technician").click(function(){
  console.log("you picked the Technician");
  playerOne.class = new Battledome.Arena.Technician;
  console.log(playerOne);
})

$("#Rocketeer").click(function(){
  console.log("you picked the Rocketeer");
  playerOne.class = new Battledome.Arena.Rocketeer;
  console.log(playerOne);
})

$("#Brawler").click(function(){
  console.log("you picked the Brawler");
  playerOne.class = new Battledome.Arena.Brawler;
  console.log(playerOne);
})

$("#Berserker").click(function(){
  console.log("you picked the Berserker");
  playerOne.class = new Battledome.Arena.Berserker;
  console.log(playerOne);
})


// RESEARCH THIS SECTION
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();
// console.log(warrior.toString());


// console.log(playerOne.toString());

// $("#inputCombatStats").append(playerOne);

/*
  Test code to generate a spell & BroadSword weapon damage
 */
// var spell = new Battledome.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

// var broadSword1 = new BroadSword();
// console.log(broadSword1.toString());

// var dagger1 = new Dagger();
// console.log(dagger1.toString());


$(document).ready(function() {
  var orc;
  // console.log("orc ready!")
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");

        function beginCombat(playerOne) {
          orc = new Battledome.Combatants.Orc();
          orc.generateClass();
          console.log(orc.health);
          orcHealth = orc.health;
          console.log("orc's health: ", orcHealth);
          playerHealth = playerOne.health;
          console.log("human health: ", playerHealth);
          orc.setWeapon(new BroadSword());
          console.log(orc.toString());
          console.log(orc)
          $("#inputEnemyStats").text(orc.toString());
          $("#inputPlayerStats").append(playerOne.toString());
        }
        beginCombat(playerOne)
      }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
/*new code: when attack button is pressed event listener*/
  $(".attack__button").click(function(e) {
    console.log("you pressed the attack button");
    // var foe = new Battledome.Combatants.Monster();
    // console.log("spell: ", spell.toString());
    // console.log("player one health at start: ", playerHealth);
    var player1Damage = playerOne.weapon.attackDamage();
    console.log("player one inflicts this damage: ", player1Damage);
    var orcDamage = orc.weapon.attackDamage();
    console.log("orc inflicts this damage: ", orcDamage);
    console.log("orc health: ", orc.health);
    console.log("human health: ",playerOne.health);
    orc.health = orc.health - player1Damage;
    playerOne.health = playerOne.health - orcDamage;
    console.log("The orc's health is now: ", orc.health);
    console.log(playerOne.playerName, "'s health is now: ", playerOne.health);
    $("#inputPlayerAttack").text(playerOne.playerName + playerOne.weapon.toString(player1Damage));
    $("#inputPlayerAttack").append("<p>" + playerOne.playerName + "'s hitpoints are now " + playerOne.health + "." + "</p>");

    // $("#inputEnemyAttack").text(orc.weapon.toString(orcDamage));
    $("#inputEnemyAttack").text("Badguy Bill" + " hits with " + orc.weapon.name + " for " + orcDamage + "!")
    $("#inputEnemyAttack").append("<p>" + "Badguy Bill" + " hitpoints are now " + orc.health + "." + "</p>")
    finalCountdown(orc);
  });
});

function finalCountdown(orc){
  if (playerOne.health <= 0){
    $("#hideAttack").hide()
    // $("#hideAttack").prop('disabled', true)
    console.log ("YOU LOSE!");
    $("#finalCountdown").text("YOU LOSE!")
  }
  else
    if (orc.health<=0){
    $("#hideAttack").hide()
      $("#finalCountdown").prop('disabled', true)
      console.log ("YOU WIN!");
      $("#finalCountdown").text("YOU WIN!")
    }
  }
















