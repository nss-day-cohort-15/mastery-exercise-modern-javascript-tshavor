"use strict";
console.log ("quiz.js is ready to rock!!!");

//SET GLOBAL VAR TO CREATE PROTOTYPE CHAIN

var Battledome = (function (battledome) {

//declare empty object to hold Mecha ("robots")
battledome.Combatants = {};

//set top of prototype chain (Mecha constructor)
battledome.Combatants.Mecha = function() {

    this.health = 10;
    this.damage = 5;
    this.allowedModels = ["Gunen_Lagann", "Gundam_Unicorn", "Scout", "Vulture", "Rocketeer", "Brawler"];
    // this.weapon = null;
};


//next level down on chain: types (Bipedal/Drone/Combat Constructors)
battledome.Combatants.Bipedal = function() {
  this.health += 20;
  this.damage += 10;
};
battledome.Combatants.Bipedal.prototype = new battledome.Combatants.Mecha();

battledome.Combatants.Drone = function() {

  this.name = "Drone";
  this.health += 5;
  this.damage += 5;
  // this.healthBonus = this.healthBonus +5;
  // this.damageBonus = this.damageBonus +5;
};
battledome.Combatants.Drone.prototype = new battledome.Combatants.Mecha();

battledome.Combatants.Combat = function() {
  this.name = "Combat";
  this.health += 10;
  this.damage += 20;
  // this.healthBonus = this.healthBonus + 10;
  // this.damageBonus = this.damageBonus +20;
};
battledome.Combatants.Combat.prototype = new battledome.Combatants.Mecha();

//Designate last levels of prototype chain (2 "models" for each class of Mecha)
//Bipedal:
battledome.Combatants.Gunen_Lagann = function(userName) {
  this.name = userName;
  this.health += Math.floor(Math.random() * 6 + 1);
  this.damage += Math.floor(Math.random() * 8 + 1);
  // this.healthBonus = this.healthBonus + Math.floor(Math.random() * 6 + 1);
  // this.damageBonus = this.damageBonus + Math.floor(Math.random() * 8 + 1);
};
battledome.Combatants.Gunen_Lagann.prototype = new battledome.Combatants.Bipedal();

battledome.Combatants.Gundam_Unicorn = function(userName) {
  this.name = userName;
  this.health += Math.floor(Math.random() * 7 + 7);
  this.damage += Math.floor(Math.random() * 9 + 1);
  // this.healthBonus = this.healthBonus + Math.floor(Math.random() * 7 + 7);
  // this.damageBonus = this.damageBonus + Math.floor(Math.random() * 9 + 1);
};
battledome.Combatants.Gundam_Unicorn.prototype = new battledome.Combatants.Bipedal();
////////////////////////////////////////////////////////////////////////////////////
// Drone:
battledome.Combatants.Scout = function(userName) {
  this.name = userName;
  this.health += Math.floor(Math.random() * 2 + 1);
  this.damage += Math.floor(Math.random() * 2 + 1);
  // this.healthBonus = this.healthBonus + Math.floor(Math.random() * 2 + 1);
  // this.damageBonus = this.damageBonus + Math.floor(Math.random() * 2 + 1);
};
battledome.Combatants.Scout.prototype = new battledome.Combatants.Drone();

battledome.Combatants.Vulture = function(userName) {
  this.name = userName;
  this.health += Math.floor(Math.random() * 3 + 3);
  this.damage += Math.floor(Math.random() * 2 + 5);
  // this.healthBonus = this.healthBonus + Math.floor(Math.random() * 3 + 3);
  // this.damageBonus = this.damageBonus + Math.floor(Math.random() * 2 + 5);
};
battledome.Combatants.Vulture.prototype = new battledome.Combatants.Drone();
///////////////////////////////////////////////////////////////////////////
// Combat:
battledome.Combatants.Rocketeer = function(userName) {
  this.name = userName;
  this.health += Math.floor(Math.random() * 4 + 2);
  this.damage += Math.floor(Math.random() * 4 + 1);
  // this.healthBonus = this.healthBonus + Math.floor(Math.random() * 4 + 2);
  // this.damageBonus = this.damageBonus + Math.floor(Math.random() * 4 + 1);
};
battledome.Combatants.Rocketeer.prototype = new battledome.Combatants.Combat();

battledome.Combatants.Brawler = function(userName) {
  this.name = userName;
  this.health += Math.floor(Math.random() * 5 + 3);
  this.damage += Math.floor(Math.random() * 4 + 4);
  // this.healthBonus = this.healthBonus + Math.floor(Math.random() * 5 + 3);
  // this.damageBonus = this.damageBonus + Math.floor(Math.random() * 4 + 4);
};
battledome.Combatants.Brawler.prototype = new battledome.Combatants.Combat();
///////////////////////////////////////////////////////////////////////////
return battledome;

})

(Battledome || {})

