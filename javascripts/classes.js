var Battledome = Battledome || {};
Battledome.Arena = {};

/*
  Base function for a base player, and type
 */
Battledome.Arena.PlayerClass = function() {
  this.name = "Base_Mecha";
  this.healthBonus = 0;

  this.toString = function() {
    return this.name;
    console.log("this name");
  }
};

    // Bipedal Classes

Battledome.Arena.Bipedal = function() {
  this.healthBonus = 20;
  this.damage= 10
};
Battledome.Arena.Bipedal.prototype = new Battledome.Arena.PlayerClass();

Battledome.Arena.Gunen_Lagann = function() {
  this.name = "Gunen_Lagann";
  this.healthBonus = this.healthBonus + 25;
  this.damage = this.damage +20;
};
Battledome.Arena.Gunen_Lagann.prototype = new Battledome.Arena.Bipedal();

Battledome.Arena.Gundam_Unicorn = function() {
  this.name = "Gundam_Unicorn";
  this.healthBonus = this.healthBonus + 20;
  this.damage = this.damage +20;
};
Battledome.Arena.Gundam_Unicorn.prototype = new Battledome.Arena.Bipedal();


    // (Drone Classes)

Battledome.Arena.Drone = function() {
  this.name = "Drone";
  this.healthBonus = this.healthBonus +5;
  this.damage = this.damage +5;
};
Battledome.Arena.Drone.prototype = new Battledome.Arena.PlayerClass();

Battledome.Arena.Scout = function() {
  this.name = "Scout";
  this.healthBonus = this.healthBonus + 5;
  this.damage = this.damage +100;
};
Battledome.Arena.Scout.prototype = new Battledome.Arena.Drone();

Battledome.Arena.Vulture = function() {
  this.name = "Vulture";
  this.healthBonus = this.healthBonus +5;
  this.damage = this.damage +15;
};
Battledome.Arena.Vulture.prototype = new Battledome.Arena.Drone();


    // (COMBAT CLASSES)

Battledome.Arena.Combat = function() {
  this.name = "Combat";
  this.healthBonus = this.healthBonus + 10;
  this.damage = this.damage +20;
};
Battledome.Arena.Combat.prototype = new Battledome.Arena.PlayerClass();

Battledome.Arena.Rocketeer = function() {
  this.name = "Rocketeer";
  this.healthBonus = this.healthBonus + 5;
  this.damage = this.damage +10;
};
Battledome.Arena.Rocketeer.prototype = new Battledome.Arena.Combat();

Battledome.Arena.Brawler = function() {
  this.name = "Brawler";
  this.healthBonus = this.healthBonus + 10;
  this.damage = this.damage +15;
};
Battledome.Arena.Brawler.prototype = new Battledome.Arena.Combat();


