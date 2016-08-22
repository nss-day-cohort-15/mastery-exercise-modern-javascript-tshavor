/*
  Modify this file for Battledrome !
 */
// Battledrome (Battledrome)
// Arena (Arena)
// Base_Mecha (Base_Mecha)
var Battledrome = Battledrome || {};
Battledrome.Arena = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Battledrome.Arena.PlayerClass = function() {
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
      - Gunen_Lagann (Gunen_Lagann)
      - Gundam_Unicorn (Gundam_Unicorn)
      - Gundam_Seed (Gundam_Seed)

 */
Battledrome.Arena.Bipedal = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Battledrome.Arena.Bipedal.prototype = new Battledrome.Arena.PlayerClass();


Battledrome.Arena.Gunen_Lagann = function() {
  this.name = "Gunen_Lagann";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Battledrome.Arena.Gunen_Lagann.prototype = new Battledrome.Arena.Bipedal();


Battledrome.Arena.Gundam_Unicorn = function() {
  this.name = "Gundam_Unicorn";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Battledrome.Arena.Gundam_Unicorn.prototype = new Battledrome.Arena.Bipedal();


Battledrome.Arena.Gundam_Seed = function() {
  this.name = "Gundam_Seed";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Battledrome.Arena.Gundam_Seed.prototype = new Battledrome.Arena.Bipedal();

/*
    MAGE (Drone)
      - Scout (Scout)
      - Vulture (Vulture)
      - Technician (Technician)

 */
Battledrome.Arena.Drone = function() {
  this.name = "Drone";
  // this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Battledrome.Arena.Drone.prototype = new Battledrome.Arena.PlayerClass();


Battledrome.Arena.Scout = function() {
  this.name = "Scout";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Battledrome.Arena.Scout.prototype = new Battledrome.Arena.Drone();


Battledrome.Arena.Vulture = function() {
  this.name = "Vulture";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Battledrome.Arena.Vulture.prototype = new Battledrome.Arena.Drone();


Battledrome.Arena.Conjurer = function() {
  this.name = "Conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Battledrome.Arena.Conjurer.prototype = new Battledrome.Arena.Drone();

/*
    STEALTH CLASSES (COMBAT)
      - Rocketeer (Rocketeer)
      - Brawler (Brawler)
      - Berserker (Gundam_Seed)
 */
Battledrome.Arena.Combat = function() {
  this.name = "Combat";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 0;
  this.intelligenceBonus = this.intelligenceBonus + 0;
};
Battledrome.Arena.Combat.prototype = new Battledrome.Arena.PlayerClass();


Battledrome.Arena.Rocketeer = function() {
  this.name = "Rocketeer";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus +5;
  this.intelligenceBonus = this.intelligenceBonus + 5;
};
Battledrome.Arena.Rocketeer.prototype = new Battledrome.Arena.Stealth();


Battledrome.Arena.Brawler = function() {
  this.name = "Brawler";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
};
Battledrome.Arena.Brawler.prototype = new Battledrome.Arena.Stealth();


Battledrome.Arena.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 5;
  this.intelligenceBonus = this.intelligenceBonus + 15;
};
Battledrome.Arena.Berserker.prototype = new Battledrome.Arena.Stealth();

