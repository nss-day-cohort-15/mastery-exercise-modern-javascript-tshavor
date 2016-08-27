/*
  Modify this file for Battledome !
 */
// Battledome (Battledome)
// Arena (Arena)
// Base_Mecha (Base_Mecha)
var Battledome = Battledome || {};
Battledome.Arena = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Battledome.Arena.PlayerClass = function() {
  this.name = "Base_Mecha";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
    console.log("this name");
  }
};

/*
    FIGHTER CLASSES (Bipedal)

 */
Battledome.Arena.Bipedal = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Battledome.Arena.Bipedal.prototype = new Battledome.Arena.PlayerClass();

Battledome.Arena.Gunen_Lagann = function() {
  this.name = "Gunen_Lagann";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Battledome.Arena.Gunen_Lagann.prototype = new Battledome.Arena.Bipedal();

Battledome.Arena.Gundam_Unicorn = function() {
  this.name = "Gundam_Unicorn";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Battledome.Arena.Gundam_Unicorn.prototype = new Battledome.Arena.Bipedal();

Battledome.Arena.Gundam_Seed = function() {
  this.name = "Gundam_Seed";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Battledome.Arena.Gundam_Seed.prototype = new Battledome.Arena.Bipedal();
/*
    MAGE (Drone)
      - Scout (Scout)
      - Vulture (Vulture)
      - Technician (Technician)

 */
Battledome.Arena.Drone = function() {
  this.name = "Drone";
  // this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Battledome.Arena.Drone.prototype = new Battledome.Arena.PlayerClass();

Battledome.Arena.Scout = function() {
  this.name = "Scout";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Battledome.Arena.Scout.prototype = new Battledome.Arena.Drone();

Battledome.Arena.Vulture = function() {
  this.name = "Vulture";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Battledome.Arena.Vulture.prototype = new Battledome.Arena.Drone();


Battledome.Arena.Technician = function() {
  this.name = "Technician";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Battledome.Arena.Technician.prototype = new Battledome.Arena.Drone();
/*
    STEALTH CLASSES (COMBAT)
      - Rocketeer (Rocketeer)
      - Brawler (Brawler)
      - Gundam_Seed (Gundam_Seed)
 */
Battledome.Arena.Combat = function() {
  this.name = "Combat";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 0;
  this.intelligenceBonus = this.intelligenceBonus + 0;
};
Battledome.Arena.Combat.prototype = new Battledome.Arena.PlayerClass();

Battledome.Arena.Rocketeer = function() {
  this.name = "Rocketeer";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus +5;
  this.intelligenceBonus = this.intelligenceBonus + 5;
};
Battledome.Arena.Rocketeer.prototype = new Battledome.Arena.Combat();

Battledome.Arena.Brawler = function() {
  this.name = "Brawler";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Battledome.Arena.Brawler.prototype = new Battledome.Arena.Combat();

Battledome.Arena.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Battledome.Arena.Berserker.prototype = new Battledome.Arena.Combat();

