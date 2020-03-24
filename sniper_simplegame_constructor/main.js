function CreateSoldiers() {
    this.demage = Math.floor(Math.random()*(500 - 300) + 300); // (max - min) + min
    this.health = Math.floor(Math.random()*(900 - 650) + 650);
    this.weapon = ['Gun' , 'Knife' , 'Sniper'][Math.floor(Math.random()*3)];
    this.attack = function () {
      console.log("Atack");
    }
  this.info = function () {
return "Demage: "+this.demage+" Health: "+this.health+ "Weapon: "+this.weapon;
  }
}
